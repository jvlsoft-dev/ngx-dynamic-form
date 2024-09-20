import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  IFieldConfig,
  FormInputComponent,
  FormTextAreaComponent,
  FormCheckboxComponent,
  ICheckboxConfig,
  FormRadioComponent,
  IRadioConfig,
  FormSelectComponent,
  ISelectConfig,
} from 'projects/ngx-dynamic-form/src/public-api';
import { DemoService } from '../../services/demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form-examples',
  templateUrl: './dynamic-form-examples.component.html',
})
export class DynamicFormExamplesComponent {
  constructor(private _demoService: DemoService, private _router: Router) {}
  inputsConfig: IFieldConfig[] = [
    // Text input.
    {
      type: FormInputComponent,
      name: 'username',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your username',
      label: 'Username',
      placeholder: 'John',
      validation: [Validators.required],
    },
    // Email input.
    {
      type: FormInputComponent,
      name: 'email',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your company email',
      label: 'Email',
      placeholder: 'email@dominium',
      validation: [Validators.required],
    },
    // Password input.
    {
      type: FormInputComponent,
      name: 'password',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your password',
      label: 'Password',
      placeholder: 'P@sw0rd*',
      fieldType: 'password',
      validation: [Validators.required],
    },
    // Number input.
    {
      type: FormInputComponent,
      name: 'workerId',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your work ID (Optional)',
      label: 'Worker ID',
      placeholder: 'XXXX XXXX XXXX',
      fieldType: 'number',
    },
    // Date input.
    {
      type: FormInputComponent,
      name: 'birthday',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your birthday (Optional)',
      label: 'Birthday',
      placeholder: 'mm/dd/yyyy',
      fieldType: 'date',
    },
    // File input.
    {
      type: FormInputComponent,
      name: 'photo',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert a photo (Optional)',
      label: 'Photo',
      fieldType: 'file',
    },
    // Textarea input.
    {
      type: FormTextAreaComponent,
      name: 'description',
      class: 'col-lg-12 col-md-12 col-sm-12',
      helperText: 'Write a description of yourself (Optional)',
      label: 'Description',
    },
  ];
  checksRadiosConfig: IFieldConfig[] = [
    // Double check.
    {
      type: FormCheckboxComponent,
      name: 'first',
      class: 'col-lg-3 col-md-4 col-sm-6',
      label: 'Do you like codding?',
      value: true,
      options: {
        firstLabel: 'No',
        lastLabel: 'Yes',
        hasLabelMargin: false,
      } as ICheckboxConfig,
    },
    {
      type: FormCheckboxComponent,
      name: 'second',
      class: 'col-lg-3 col-md-4 col-sm-6',
      label: 'Do you like coffee?',
      options: {
        firstLabel: 'No',
        lastLabel: 'Yes',
        hasLabelMargin: false,
      } as ICheckboxConfig,
    },
    // Simple check.
    {
      type: FormCheckboxComponent,
      name: 'third',
      class: 'col-lg-3 col-md-4 col-sm-6',
      value: true,
      options: {
        lastLabel: 'Enjoying the examples?',
      } as ICheckboxConfig,
    },
    {
      type: FormCheckboxComponent,
      name: 'four',
      class: 'col-lg-3 col-md-4 col-sm-6',
      options: {
        lastLabel: 'Too many questions?',
      } as ICheckboxConfig,
    },
    // Radio example.
    {
      type: FormRadioComponent,
      name: 'radioOne',
      class: 'col-lg-6 col-md-4 col-sm-12',
      label: 'Best programming language for the web',
      value: 'TypeScript',
      options: {
        options: ['Java', 'JavaScript', 'TypeScript', 'Other'],
      } as IRadioConfig,
    },
    {
      type: FormRadioComponent,
      name: 'radioTwo',
      class: 'col-lg-6 col-md-4 col-sm-12',
      label: 'Best programming language for android development',
      options: {
        checked: 'Java',
        options: ['Kotlin', 'Java', 'Python', 'Other'],
      } as IRadioConfig,
    },
  ];
  selectsConfig: IFieldConfig[] = [
    // Simple Select.
    {
      type: FormSelectComponent,
      name: 'simpleSelect',
      class: 'col-md-6 col-sm-12',
      label: 'Simple select',
      helperText: 'You can select one item',
      options: {
        limit: 10,
        itemService: this._demoService,
        autoLoadItems: true,
        dynamic: true,
        bindValue: 'name',
        bindLabel: 'name',
        searchable: false,
      } as ISelectConfig,
    },
    // Multiple Select.
    {
      type: FormSelectComponent,
      name: 'multipleSelect',
      class: 'col-md-6 col-sm-12',
      label: 'Multiple select',
      helperText: 'You can select several items',
      options: {
        multiple: true,
        limit: 10,
        itemService: this._demoService,
        autoLoadItems: true,
        dynamic: true,
        bindValue: 'name',
        bindLabel: 'name',
        searchable: false,
      } as ISelectConfig,
    },
    // Search Select.
    {
      type: FormSelectComponent,
      name: 'searchSelect',
      class: 'col-md-6 col-sm-12',
      label: 'Search select',
      helperText: 'You can search the items',
      options: {
        limit: 10,
        itemService: this._demoService,
        dynamic: true,
        bindValue: 'name',
        bindLabel: 'name',
      } as ISelectConfig,
    },
  ];

  /**
   * Navigate to the specified url.
   * @param url - Url to navigate
   */
  goTo(url: string) {
    this._router.navigateByUrl(url)
  }
}
