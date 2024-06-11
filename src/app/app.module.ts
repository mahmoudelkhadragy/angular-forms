import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlErrorMessagesComponent } from './shared/control-error-messages/control-error-messages.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { AppRoutingModule } from './app-routing.module';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StepperFormCdkComponent } from './stepper-form-cdk/stepper-form-cdk.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './shared/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlErrorMessagesComponent,
    FormTemplateDrivenComponent,
    FormReactiveComponent,
    StepperFormComponent,
    StepperFormCdkComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    CdkStepperModule,
  ],
  exports: [CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
