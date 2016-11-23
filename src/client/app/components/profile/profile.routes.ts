/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Module Level Dependencies */
import { MyProfileComponent } from './components/my-profile/my-profile.component';

/** Route Definitions */
const ProfileRoutes: Routes = [
  {
    path: 'profile',   
    component: MyProfileComponent    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
