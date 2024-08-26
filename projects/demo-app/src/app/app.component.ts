import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormInputComponent } from 'projects/ngx-dynamic-form/src/lib/fields/form-input/form-input.component';
import { IFieldConfig } from 'projects/ngx-dynamic-form/src/lib/interfaces/ifield-config';

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
      style: 'padding: 10px',
      order: 1,
      disabled: false,
      // TODO: 
      readonly: false,
      value: '',
      validation: [Validators.required],
      options: {
        showLabel: true,
        staticText: 'This is an static text.',
        min: 0,
        step: 1
      }
    },
  ];
}
