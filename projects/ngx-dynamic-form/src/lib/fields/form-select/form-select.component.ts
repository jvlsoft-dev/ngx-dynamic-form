import { ChangeDetectorRef, Component } from '@angular/core';
import { IField } from '../../interfaces/ifield';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/ifield-config';
import { FormLabelComponent } from '../../components/form-label/form-label.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { DestroyComponent } from '../../components/destroy/destroy.component';
import { FormHelperService } from '../../services/form-helper.service';
import {
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  tap,
  finalize,
  map,
  BehaviorSubject,
  Subject,
} from 'rxjs';
import { unionWith, isEqual } from 'lodash'
import { messages } from '../../constants/lang.es';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormLabelComponent,
    NgSelectModule,
  ],
})
export class FormSelectComponent extends DestroyComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;
  maxNumber = Number.MAX_SAFE_INTEGER;
  requiredField = messages.REQUIRED_FIELD
  skipSelect: number = 0;
  input$ = new Subject<string>();
  loading$ = new BehaviorSubject(false);
  items: [...[], ...any] = [];

  constructor(
    public formService: FormHelperService,
    private _cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.items = this.config.options?.items ?? [];

    // Search if is a dynamic select.
    if (!!this.config.options?.dynamic) {
      this.input$
        .pipe(
          takeUntil(this.destroy$),
          debounceTime(400),
          distinctUntilChanged(),
          tap(() => this.loading$.next(true))
        )
        .subscribe((search) => {
          return this.loadItems(search);
        });
    }
  }

  ngAfterViewInit(): void {
    if (!this.config.options?.autoLoadItems) {
      return;
    }
    this.loadItems();
  }

  /**
   * Scroll event handler.
   * @param searchTerm - String to search.
   */
  onScroll(searchTerm?: string) {
    if (!this.config.options?.dynamic) {
      return;
    }
    this.skipSelect += this.config.options.limit ?? 20;
    this.loadItems(searchTerm);
  }

  /**
   * Search event handler.
   */
  onSearch() {
    if (!this.config.options?.dynamic) {
      return;
    }
    this.skipSelect = 0;
    this.items = [];
  }

  /**
   * Load the ng-select items.
   * @param searchTerm - String to search.
   */
  loadItems(searchTerm?: string) {
    // Build query.
    const query = {};
    if (!!searchTerm) {
      Object.assign(query, { search: searchTerm });
    }
    if (!!this.config.options?.filter) {
      Object.assign(query, this.config.options.filter);
    }

    // Search.
    this.loading$.next(true);
    return this.getMethod(query)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loading$.next(false)),
        map((data) =>
          !this.config.options?.transformData
            ? data.rows
            : this.config.options.transformData(data.rows)
        )
      )
      .subscribe((items) => {
        this.items = !this.items?.length
          ? items
          : unionWith(this.items, items, isEqual);
        this._cdr.detectChanges();
      });
  }

  /**
   * Get to the method that returns the items.
   * @param query - Query options.
   */
  getMethod(query: any) {
    if (!!this.config.options?.method) {
      return this.config.options.method(
        query,
        this.skipSelect,
        this.config.options.limit || 20
      );
    }
    if (!!this.config.options?.itemService) {
      return this.config.options.itemService.all(
        query,
        this.skipSelect,
        this.config.options.limit || 20
      );
    }
    throw new Error(messages.UNDEFINED_METHOD_OR_SERVICE);
  }
}
