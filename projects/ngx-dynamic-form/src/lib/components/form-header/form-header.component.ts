import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class FormHeaderComponent {
  @Input() title: string = '';
  @Input() canGoBack = true;

  constructor(private location: Location) {}

  /**
   * Go to the previous URL.
   */
  goBack() {
    this.location.back();
  }
}
