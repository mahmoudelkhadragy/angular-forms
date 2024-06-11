import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-control-error-messages',
  templateUrl: './control-error-messages.component.html',
  styleUrls: ['./control-error-messages.component.css'],
})
export class ControlErrorMessagesComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string = '';

  errorMessages: {
    [key: string]: string | ((params: any) => string);
  } = {
    required: `${this.label || 'this field'} is required`,
    email: 'Please enter a valid email address',
    minlength: (params: any) =>
      `${this.label || 'this field'} Minimum length is ${
        params.requiredLength
      } characters`,
    maxlength: (params: any) =>
      `Maximum length is ${params.requiredLength} characters`,
    // Add more validation messages as needed
  };

  get errorMessage(): string | null {
    if (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    ) {
      for (const key in this.control.errors) {
        if (this.errorMessages[key]) {
          const errorValue = this.control.errors[key];
          const errorMessage = this.errorMessages[key];
          return typeof errorMessage === 'function'
            ? errorMessage(errorValue)
            : errorMessage;
        }
      }
    }
    return null;
  }

  constructor() {}

  ngOnInit() {}
}
