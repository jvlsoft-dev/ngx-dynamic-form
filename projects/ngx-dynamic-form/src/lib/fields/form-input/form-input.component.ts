import { ChangeDetectorRef, Component } from '@angular/core';
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
  styleUrls: ['./form-input.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLabelComponent],
})
export class FormInputComponent extends DestroyComponent implements IField {
  // TODO: Create the component structure.
  config!: IFieldConfig;
  group!: FormGroup<any>;

  constructor(
    public formService: FormHelperService,
    private _cdr: ChangeDetectorRef,
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
}
