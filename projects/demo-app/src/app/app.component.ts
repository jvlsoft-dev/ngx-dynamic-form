import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormInputComponent } from 'projects/ngx-dynamic-form/src/lib/fields/form-input/form-input.component';
import { FormSelectComponent } from 'projects/ngx-dynamic-form/src/lib/fields/form-select/form-select.component';
import { IFieldConfig } from 'projects/ngx-dynamic-form/src/lib/interfaces/ifield-config';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  inputConfig: IFieldConfig[] = [
    {
      type: FormInputComponent,
      name: 'topic',
      class: 'col-lg-9 col-md-9 col-sm-12',
      label: 'Topic',
      helperText: 'This is an helper text.',
      fieldType: 'text',
      placeholder: 'Text example',
      style: { padding: '10px' },
      disabled: false,
      readonly: false,
      value: '',
      validation: [Validators.required],
      options: {
        showLabel: true,
        staticText: 'This is an static text.',
        min: 0,
        step: 1,
      },
    },
    {
      type: FormInputComponent,
      name: 'number',
      class: 'col-lg-3 col-md-3 col-sm-12',
      label: 'Number',
      helperText: 'This is an helper text.',
      fieldType: 'number',
      placeholder: 'Number example',
      style: { padding: '10px' },
      disabled: false,
      readonly: false,
      value: '',
      validation: [Validators.required],
      options: {
        validStyle: true,
        showLabel: true,
        staticText: 'This is an static text.',
        min: 0,
        step: 1,
      },
    },
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
        autoLoadItems: true,
        dynamic: true,
        bindValue: 'username',
        bindLabel: 'username',
        method: (query?: any, skip?: number, limit?: number) => {
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
        },
      },
    },
  ];
}
