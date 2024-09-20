import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, finalize, Subscription } from 'rxjs';
import { DynamicFormComponent } from '../../ngx-dynamic-form.component';
import { IFieldService } from '../../interfaces/ifield-service';
import { DestroyComponent } from '../destroy/destroy.component';
import { IFieldConfig } from '../../interfaces/ifield-config';

@Component({
  selector: 'generic-add',
  template: '',
  standalone: true,
  providers: [
    ActivatedRoute
  ]
})
export abstract class GenericAddComponent extends DestroyComponent {
  /**
   * Edited object instance id.
   */
  id?: number;
  /**
   * Form title (for the card header).
   */
  title: string = '';
  /**
   * Form values object data.
   */
  data: any;
  /**
   * Dynamic form config to show the fields.
   */
  config: IFieldConfig[] = []
  /**
   * Item service to get the data and save it
   */
  abstract service: IFieldService;
  /**
   * Reference to the `DynamicFormComponent` object on the view.
   */
  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected cdr: ChangeDetectorRef
  ) {
    super();
  }

  /**
   * Url of the list view to navigate to, via the `DynamicForm goBack` button.
   */
  get listUrl() {
    return '';
  }

  ngAfterViewInit(): void {
    // get the item if id is defined
    this.id = this.activatedRoute.snapshot.params['id'];
    !!this.id ? this.getData() : this.form.patchValues({ id: null });
  }

  /**
   * Returns query object to use at the `getData()` method.
   * @returns {} Query object.
   */
  getQuery() {
    return {};
  }

  /**
   * Gets initial data from the server.
   * @returns {Subscription} - Data subscription;
   */
  getData(): Subscription {
    return this.service
      .get(this.id!, this.getQuery())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.form.patchValues(this.parseData(data.data || data));
        this.data = data.data;
      });
  }

  /**
   * Process data from the server before patching values to form.
   * @param data
   * @returns Processed data.
   */
  parseData(data: any) {
    return data;
  }

  /**
   * Process form data before submit to server.
   * @param data
   * @returns Processed data.
   */
  processSubmit(data: any) {
    return data;
  }

  /**
   * Submits form data to server.
   * @param value - Current form values object.
   * @returns {Subscription} - Data push and back navigation subscription.
   */
  submit(value: any): Subscription {
    this.form.isLoading = true;
    return this.service
      .save(this.processSubmit(value))
      .pipe(
        finalize(() => {
          this.form.isLoading = false;
          this.cdr.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(async () => await this.router.navigateByUrl(this.listUrl));
  }
}
