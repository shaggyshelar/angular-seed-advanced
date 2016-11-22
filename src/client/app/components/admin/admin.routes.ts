import { NgModule}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './components/feature/feature.component';

export const AdminRoutes: Routes = [
  {
    path: 'admin',
    children: [
       {
        path: 'feature',
        component: FeatureComponent,
        data: {
          permissions: ['FEATURE.READ']
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
