import { Component, Input } from '@angular/core';
import { IField } from '../../interfaces/ifield';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/ifield-config';

@Component({
  selector: 'form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css'],
  standalone: true
})
export class FormButtonComponent implements IField {
  // TODO: Create the component structure.
  config!: IFieldConfig;
  @Input() group!: FormGroup<any>;
  @Input() isLoading: boolean = true
}
