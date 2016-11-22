import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password.component';

export const ChangePasswordRoutes: Routes = [
  {
    path: 'change-password',
    component: ChangePasswordComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(ChangePasswordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChangePasswordRoutingModule {  }

