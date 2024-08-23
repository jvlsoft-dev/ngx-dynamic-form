import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../../interfaces/ifield';
import { IFieldConfig } from '../../interfaces/ifield-config';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  standalone: true,
})
export class FormInputComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;
}
