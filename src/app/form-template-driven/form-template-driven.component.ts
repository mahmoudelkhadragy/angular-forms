import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css'],
})
export class FormTemplateDrivenComponent {
  @ViewChild('f') signupForm: NgForm;
  answer: string;
  genders: string[] = ['Male', 'Female'];

  submitted = false;

  suggestUserName() {
    const username = 'Superuser';
    // this.signupForm.form.setValue({
    //   userData: { username, email: '' },
    //   gender: '',
    //   secret: '',
    //   questionAnswer: '',
    // });
    this.signupForm.form.patchValue({ userData: { username } });
  }

  get form(): FormGroup {
    return this.signupForm.form as FormGroup;
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
