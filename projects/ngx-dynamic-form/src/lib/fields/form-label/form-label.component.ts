import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../../interfaces/ifield';
import { IFieldConfig } from '../../interfaces/ifield-config';

@Component({
  selector: 'form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.css'],
  standalone: true,
})
export class FormLabelComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;
}
