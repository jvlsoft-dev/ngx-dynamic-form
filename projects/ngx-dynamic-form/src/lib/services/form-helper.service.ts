import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IFieldConfig } from '../interfaces/ifield-config';
import { DynamicFormComponent } from '../ngx-dynamic-form.component';

@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  isSubmitted$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _fb: FormBuilder) {}

  /**
   * Create the FormControl from a configuration.
   * @param config - The configuration to create the FormControl.
   * @returns The created FormControl.
   */
  createControl(config: IFieldConfig) {
    const { disabled, validation, value, asyncValidators, updateOn } = config;
    return this._fb.control(
      { disabled, value },
      { validators: validation, asyncValidators, updateOn }
    );
  }

  /**
   * Check that the form values ​​are correct.
   * @param event - DOM event.
   * @param form - Form to check.
   * @returns A boolean of whether the form is valid.
   */
  checkValidation(event: Event, form: FormGroup | DynamicFormComponent) {
    this.isSubmitted$.next(true);
    event.preventDefault();
    event.stopPropagation();
    if (form.invalid) {
      form.markAllAsTouched();
      return false;
    }
    return true;
  }

  /**
   * Check if the FormComponent is required.
   * @param config - FormComponent Config.
   * @returns If is required.
   */
  isRequired(config: IFieldConfig) {
    return !!config.validation?.find((i) => i.name === 'required');
  }
}
