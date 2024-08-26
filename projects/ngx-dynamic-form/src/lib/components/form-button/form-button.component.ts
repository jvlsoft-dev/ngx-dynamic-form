import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-button',
  templateUrl: './form-button.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormButtonComponent {
  // TODO: Change strings for constants.
  @Input() label: string = 'Guardar';
  @Input() group!: FormGroup;
  @Input() isLoading: boolean = true;
}
