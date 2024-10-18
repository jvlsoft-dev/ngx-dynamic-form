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
  /**
   * Message to show in the button body.
   */
  @Input() label: string = messages.SAVE;
  /**
   * Form group to which the button belongs.
   */
  @Input() group!: FormGroup;
  /**
   * If is true the component is loading.
   */
  @Input() isLoading: boolean = true;
}
