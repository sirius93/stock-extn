import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'info', component: InfoComponent }
  ];
