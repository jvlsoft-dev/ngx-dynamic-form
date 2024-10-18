import { ComponentRef, Type } from '@angular/core';
import { IField } from './ifield';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { IFieldOptions } from './ifield-options';

export interface IFieldConfig {
  /**
   * Type of html field.
   */
  type: Type<IField>;
  /**
   * Field name, this name will be the `FormControlName`. Example: 'name', 'email', etc.
   */
  name: string;
  /**
   * Class to apply to the field. Example: `col-lg-4`.
   */
  class: string;
  /**
   * Component label to show above this.
   */
  label?: string;
  /**
   * Text to display below the field.
   */
  helperText?: string;
  /**
   * Html type attribute of the field. Example: 'text', 'password', 'email', 'submit', etc.
   */
  fieldType?: string;
  /**
   * Field placeholder.
   */
  placeholder?: string;
  /**
   * Style to apply to the field. Example: `{ "background-color": "#fff" }`
   */
  style?: object;
  /**
   * Fields order. Field with order 1 goes first that with order 2.
   */
  order?: number;
  /**
   * If the field will be disabled.
   */
  disabled?: boolean;
  /**
   * If the field is readonly.
   */
  readonly?: boolean;
  /**
   * Field default value. Example: 'John Doe'
   */
  value?: any;
  /**
   * Object with other options, this give the possibility to add other functionalities.
   * Example: In the radio field the options can be defined:
   * `options: { options: ['Java', 'Python', 'JavaScript'] }`.
   */
  options?: IFieldOptions;
  /**
   * Represents a component created by a ComponentFactory. Provides access to the component
   * instance and related objects, and provides the means of destroying the instance.
   */
  component?: ComponentRef<any>;
  /**
   * Array of ValidatorFn to be executed in the field.
   */
  validation?: ValidatorFn[];
  /**
   * It accepts an AsyncValidatorFn or AsyncValidatorFn[] for async validator in reactive forms.
   */
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
  /**
   * The event name for control to update upon.
   */
  updateOn?: 'change' | 'blur' | 'submit';
}
