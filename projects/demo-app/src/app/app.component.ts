import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { DemoService } from './services/demo.service';
import {
  FormCheckboxComponent,
  FormInputComponent,
  FormRadioComponent,
  FormSelectComponent,
  FormTextAreaComponent,
  ICheckboxConfig,
  IFieldConfig,
  IRadioConfig,
} from 'projects/ngx-dynamic-form/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private _demoService: DemoService) {}
  inputsConfig: IFieldConfig[] = [
    {
      type: FormInputComponent,
      name: 'username',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your username',
      label: 'Username',
      placeholder: 'John',
      validation: [Validators.required],
    },
    {
      type: FormInputComponent,
      name: 'email',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your company email',
      label: 'Email',
      placeholder: 'email@dominium',
      validation: [Validators.required],
    },
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
    {
      type: FormInputComponent,
      name: 'workerId',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your work ID (Optional)',
      label: 'Worker ID',
      placeholder: 'XXXX XXXX XXXX',
      fieldType: 'number',
    },
    {
      type: FormInputComponent,
      name: 'birthday',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your birthday (Optional)',
      label: 'Birthday',
      placeholder: 'mm/dd/yyyy',
      fieldType: 'date',
    },
    {
      type: FormInputComponent,
      name: 'photo',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert a photo (Optional)',
      label: 'Photo',
      fieldType: 'file',
    },
    {
      type: FormTextAreaComponent,
      name: 'description',
      class: 'col-lg-12 col-md-12 col-sm-12',
      helperText: 'Write a description of yourself (Optional)',
      label: 'Description',
    },
  ];
  checksRadiosConfig: IFieldConfig[] = [
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
    {
      type: FormRadioComponent,
      name: 'radioOne',
      class: 'col-lg-6 col-md-4 col-sm-12',
      label: 'Best programming language for the web',
      value: 'TypeScript',
      options: {
        options: [
          'Java',
          'JavaScript',
          'TypeScript',
          'Other'
        ]
      } as IRadioConfig,
    },
    {
      type: FormRadioComponent,
      name: 'radioTwo',
      class: 'col-lg-6 col-md-4 col-sm-12',
      label: 'Best programming language for android development',
      options: {
        checked: 'Java',
        options: [
          'Kotlin',
          'Java',
          'Python',
          'Other'
        ]
      } as IRadioConfig,
    },
    
  ];
  selectsConfig: IFieldConfig[] = [
    {
      type: FormSelectComponent,
      name: 'select',
      class: 'col-6',
      label: 'Topic',
      helperText: 'This is an helper text.',
      placeholder: 'Text example',
      style: { padding: '10px' },
      disabled: false,
      readonly: false,
      validation: [Validators.required],
      options: {
        limit: 10,
        itemService: this._demoService,
        autoLoadItems: true,
        dynamic: true,
        bindValue: 'name',
        bindLabel: 'name',
      },
    },
  ];

  /**
   * Demo method to test FormSelectComponent.
   */
  demoMethod(query?: any, skip?: number, limit?: number) {
    const data = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
    let count = 0;
    const rows = {
      rows: [
        ...data.filter(
          (e, i) =>
            (!!query?.search ? e == query.search : true) &&
            (!!skip ? skip <= i : true) &&
            (!!limit ? ++count <= limit : ++count <= 10)
        ),
      ],
    };
    return of(rows);
  }
}
