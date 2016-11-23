import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './components/feature/feature.component';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { RoleAddEditComponent } from './components/roles/role-add-edit/role-add-edit.component';

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
      },
      {
        path: 'role',
        children: [
          {
            path: '',
            component: RoleListComponent,
            data: {
              permissions: ['ROLE.READ']
            }
          },
          {
            path: 'add',
            component: RoleAddEditComponent,
            data: {
              permissions: ['ROLE.CREATE']
            }
          },
          {
            path: 'edit/:roleId',
            component: RoleAddEditComponent,
            data: {
              permissions: ['ROLE.UPDATE']
            }
          },
        ]
      },

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
