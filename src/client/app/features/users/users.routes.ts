/** Angular Dependencies */
import { Routes } from '@angular/router';
/** Module Level Dependencies */
import { UserComponent } from './components/user.component';
import { UsersListComponent } from './components/users-list.component';
export const UsersRoutes: Routes = [
    {
        path: '', component: UsersListComponent,
    }, {
        path: ':id', component: UserComponent
    }
];
