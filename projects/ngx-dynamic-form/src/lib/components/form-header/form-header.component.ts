import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'form-header',
  templateUrl: './form-header.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class FormHeaderComponent {
  /**
   * Title to show in the header.
   */
  @Input() title: string = '';
  /**
   * If is true the component shows a button to go back.
   */
  @Input() canGoBack = true;

  constructor(private location: Location) {}

  /**
   * Go to the previous URL.
   */
  goBack() {
    this.location.back();
  }
}
