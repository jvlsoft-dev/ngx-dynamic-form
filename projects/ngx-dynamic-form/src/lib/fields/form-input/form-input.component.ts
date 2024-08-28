import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IField } from '../../interfaces/ifield';
import { IFieldConfig } from '../../interfaces/ifield-config';
import { DestroyComponent } from '../../components/destroy/destroy.component';
import { CommonModule } from '@angular/common';
import { FormLabelComponent } from '../../components/form-label/form-label.component';
import { FormHelperService } from '../../services/form-helper.service';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLabelComponent],
})
export class FormInputComponent extends DestroyComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;
  type = 'password';

  constructor(
    public formService: FormHelperService,
  ) {
    super();
  }

  /**
   * Get if the input has a label.
   */
  get showLabel() {
    return (
      typeof this.config.options?.showLabel === 'undefined' ||
      !!this.config.options?.showLabel
    );
  }

  /**
   * Show and hidden the password.
   */
  togglePassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
  }
}
