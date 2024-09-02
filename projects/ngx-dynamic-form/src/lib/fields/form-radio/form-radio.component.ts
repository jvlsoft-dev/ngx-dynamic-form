import { AfterViewInit, Component } from '@angular/core';
import { IField } from '../../interfaces/ifield';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/ifield-config';
import { CommonModule } from '@angular/common';
import { FormLabelComponent } from "../../components/form-label/form-label.component";

@Component({
  selector: 'form-radio',
  templateUrl: './form-radio.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLabelComponent]
})
export class FormRadioComponent implements IField, AfterViewInit {
  config!: IFieldConfig;
  group!: FormGroup;

  constructor() {}

  ngAfterViewInit(): void {
    if (!this.config.options?.checked) {
      return;
    }
    // Set the checked element
    this.group.get(this.config.name)?.setValue(this.config.options.checked);
  }
}
