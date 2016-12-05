/** Angular Depedencies */
import { Routes } from '@angular/router';

/** Module Level Depedencies */
import { ChangePasswordComponent } from './components/change-password/change-password.component';

export const ChangePasswordRoutes: Routes = [
  {
    path: '',
    redirectTo: 'change',
    pathMatch: 'full'
  },
  {
    path: 'change',
    component: ChangePasswordComponent
  }
];
