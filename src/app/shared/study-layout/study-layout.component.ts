import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecycleDemoComponent } from '../lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'study-layout',
  imports: [FormsModule, LifecycleDemoComponent],
  templateUrl: './study-layout.component.html',
  styleUrl: './study-layout.component.css',
})
export class StudyLayoutComponent {
  // Begin-->> Lifecycle
  // End---->> Lifecycle

  // Two-way binding
  bindingMessage = '';

  // Event

  nameBtn = 'Event click!';
  clickEventCount = 0;
  clickEventMessage = `Click ${this.clickEventCount} times`;
  handleEventClick(): void {
    this.clickEventCount = this.clickEventCount + 1;
    this.clickEventMessage = `Click ${this.clickEventCount} times`;
  }

  // Text
  title = 'Person';
  person = {
    name: 'Paul Tran',
    age: 33,
    address: 'Ha Noi',
  };

  // Properties
  isDisable = true;

  // Attribute
  contentImage = 'test attribute =>>';
}
