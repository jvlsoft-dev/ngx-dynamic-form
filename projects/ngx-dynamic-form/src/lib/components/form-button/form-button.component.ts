import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { messages } from '../../constants/lang.es';

@Component({
  selector: 'form-button',
  templateUrl: './form-button.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormButtonComponent {
  @Input() label: string = messages.SAVE;
  @Input() group!: FormGroup;
  @Input() isLoading: boolean = true;
}
