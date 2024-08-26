import { Component, Input } from '@angular/core';
import { IFieldConfig } from '../../interfaces/ifield-config';
import { FormHelperService } from '../../services/form-helper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-label',
  templateUrl: './form-label.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class FormLabelComponent {
  @Input() config!: IFieldConfig;

  constructor(public formService: FormHelperService) {}
}
