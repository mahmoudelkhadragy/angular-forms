import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { StepperFormCdkComponent } from './stepper-form-cdk/stepper-form-cdk.component';

// Define routes
const routes: Routes = [
  {
    path: '',
    redirectTo: 'stepperFormCDK',
    pathMatch: 'full',
  }, // default route
  { path: 'templateDriven', component: FormTemplateDrivenComponent },
  { path: 'reactiveForm', component: FormReactiveComponent },
  { path: 'stepperForm', component: StepperFormComponent },
  { path: 'stepperFormCDK', component: StepperFormCdkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
