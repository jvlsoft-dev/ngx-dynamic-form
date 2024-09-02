import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from '../../components/form-label/form-label.component';
import { IField } from '../../interfaces/ifield';
import { IFieldConfig } from '../../interfaces/ifield-config';
import { FormHelperService } from '../../services/form-helper.service';

@Component({
  selector: 'form-text-area',
  templateUrl: './form-text-area.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLabelComponent],
})
export class FormTextAreaComponent implements IField {
  config!: IFieldConfig;
  group!: FormGroup<any>;
  
  constructor(public formService: FormHelperService) {}
}
