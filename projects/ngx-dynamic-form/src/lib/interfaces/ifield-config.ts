import { ComponentRef, Type } from '@angular/core';
import { IField } from './ifield';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

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
   * Class to apply to the component. Example: `col-lg-4`.
   */
  class: string;
  /**
   * Default value.
   */
  value?: any;
  /**
   * Component label.
   */
  label?: string;
  /**
   * Fields order. Field with order 1 goes first that with order 2.
   */
  order?: number;
  /**
   * If the field will be disabled.
   */
  disabled?: boolean;
  /**
   * Html type attribute of the field. Example: 'text', 'password', 'email', 'submit', etc.
   */
  fieldType?: string;
  /**
   * Represents a component created by a ComponentFactory. Provides access to the component
   * instance and related objects, and provides the means of destroying the instance.
   */
  component?: ComponentRef<any>;
  /**
   * Array of ValidatorFn.
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
