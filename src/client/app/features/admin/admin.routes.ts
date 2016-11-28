import { Routes } from '@angular/router';
import { FeatureComponent } from './components/feature/feature.component';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { RoleAddEditComponent } from './components/roles/role-add-edit/role-add-edit.component';

export const AdminRoutes: Routes = [
  {
    path: 'feature',
    component: FeatureComponent,
  },
  {
    path: 'role',
    children: [
      {
        path: '',
        component: RoleListComponent,
      },
      {
        path: 'add',
        component: RoleAddEditComponent,
      },
      {
        path: 'edit/:roleId',
        component: RoleAddEditComponent,
      },
    ]
  },
];
