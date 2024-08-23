import { Component } from '@angular/core';
import { IField } from '../../interfaces/ifield';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/ifield-config';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
})
export class FormSelectComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;
}
