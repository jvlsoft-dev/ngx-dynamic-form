import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormInputComponent } from './fields/form-input/form-input.component';
import { IFieldConfig } from './interfaces/ifield-config';
import { FormHelperService } from './services/form-helper.service';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormButtonComponent } from './fields/form-button/form-button.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './ngx-dynamic-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFieldDirective, FormButtonComponent, FormHeaderComponent],
})
export class DynamicFormComponent implements OnInit {
  /**
   * A field configs array.
   */
  @Input() config: IFieldConfig[] = [];
  /**
   * Form Title.
   */
  @Input() title: string = '';
  /**
   * If the title has a prefix. Default true.
   */
  @Input() hasPrefix: boolean = true;
  /**
   * If can go to the previous form. Default true.
   */
  @Input() canGoBack: boolean = true;
  /**
   * If the form has only the fields. Default false.
   */
  @Input() onlyFields: boolean = false;
  /**
   * If the form has a button to save. Default true.
   */
  @Input() saveButton: boolean = true;
  /**
    TODO:
    This Input must to be optimized for a better behavior in future,
    because it's repetitive the validation for only fields or not
    */
  @Input() tempOnlyThisField = false;
  @Input() form!: FormGroup;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    public _formService: FormHelperService,
    private _cdr: ChangeDetectorRef,
    private _route: ActivatedRoute
  ) {}

  get value() {
    return this.form.value;
  }

  get control() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

  ngOnInit() {
    // Get id for the route
    const id = this._route.snapshot.params['id'];
    // Set title form.
    this.title =
      (!!this.hasPrefix ? (!!id ? 'Editar ' : 'Crear ') : '') + this.title;
    // Build form if is not define.
    this.form = this.form || this.createGroup();
  }

  /**
   * Creates the form group from the provided field configs array.
   * @returns The form group.
   */
  createGroup(): FormGroup {
    // Create Form Group.
    const group = this._fb.group({});
    // Add controls from the field configs array.
    this.config
      .sort((a, b) => (a.order || Infinity) - (b.order || Infinity))
      .forEach((control) =>
        group.addControl(control.name, this._formService.createControl(control))
      );
    // Create id hidden input.
    const idInput: IFieldConfig = {
      type: FormInputComponent,
      label: 'id',
      name: 'id',
      fieldType: 'hidden',
      class: 'col-lg-8',
    };
    // Add id hidden control.
    group.addControl('id', this._formService.createControl(idInput));
    return group;
  }

  /**
   * Emit the save event if the form values ​​are correct
   */
  handleSubmit(event: Event) {
    if (!!this.form && !!this._formService.checkValidation(event, this.form))
      this.save.emit(this.value);
  }

  /**
   * Patches the value of the FormGroup. It accepts an object with control names as keys,
   * and does its best to match the values to the correct controls in the group.
   * @param data - The object that matches the structure of the group.
   * @param options - Configuration options that determine how the control propagates changes and emits events after the value is patched.
   */
  patchValues(
    data: any,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ) {
    this.form?.patchValue(data, options);
    this._cdr.detectChanges();
  }

  /**
   * Marks the control and all its descendant controls as touched.
   */
  markAllAsTouched() {
    this.form.markAllAsTouched();
  }

  /**
   * Retrieves a child control given the control's name or path.
   */
  getControl(control: any) {
    return this.form.get(control);
  }

  /**
   * Sets the value of the control.
   * @param {string} name Control's name.
   * @param value Value to set.
   */
  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }
}
