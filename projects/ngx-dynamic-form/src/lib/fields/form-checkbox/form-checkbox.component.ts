import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from '../../components/form-label/form-label.component';
import { IField } from '../../interfaces/ifield';
import { IFieldConfig } from '../../interfaces/ifield-config';

@Component({
  selector: 'form-checkbox',
  templateUrl: './form-checkbox.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLabelComponent],
})
export class FormCheckboxComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;

  /**
   * Get if the check has a label.
   */
  get showLabel() {
    return this.config.options?.showLabel ?? true;
  }
}
