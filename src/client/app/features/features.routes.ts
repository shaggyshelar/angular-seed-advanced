/** Angular Dependencies */
import { Routes, RouterModule } from '@angular/router';

/** Module Level Dependencies */
//Components
import { DashboardComponent, DashboardContainerComponent } from './core/dashboard/index';
//Modules
import { ErrorPagesRoutes, AuthGuard } from './core/index';

import { UsersRoutes, UserModule } from './users/index';
import { TimesheetRoutes, TimesheetModule } from './timesheet/index';
import { CorporateModule, CorporateRoutes } from './corporate/index';
import { AdminRoutes, AdminModule } from './admin/index';
import { ProfileRoutes, ProfileModule } from './profile/index';
import { LeaveRoutes, LeaveModule } from './leaveManagement/index';

//Routes
import { AuthRoutes } from './core/index';

/** Feature Routes Definition */
export const featureRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'user',
        children: [...UsersRoutes],
        canActivate: [AuthGuard],
        data: {
            reducers: UserModule.reducers()
        }
    }, {
        path: 'timesheet',
        children: [...TimesheetRoutes],
        canActivate: [AuthGuard],
        data: {
            reducers: TimesheetModule.reducers()
        }
    }, {
        path: 'corporate',
        children: [...CorporateRoutes],
        canActivate: [AuthGuard],
        data: {
            reducers: CorporateModule.reducers(),
            permissions: ['CORPORATE.MANAGE']
        }
    }, {
        path: 'admin',
        children: [...AdminRoutes],
        data: {
            reducers: AdminModule.reducers()
        }
    }, {
        path: 'profile',
        children: [...ProfileRoutes],
        data: {
            reducers: ProfileModule.reducers()
        }
    }, {
        path: 'leave',
        children: [...LeaveRoutes],
        data: {
            reducers: LeaveModule.reducers()
        }
    }
];

/** DO NOT UPDATE BELOW CODE */
/** Features Main routes */
const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'app',
    //     pathMatch: 'full'

    // },
    ...AuthRoutes,
    {
        path: '',
        component: DashboardContainerComponent,
        canActivate: [AuthGuard],
        children: [
            ...featureRoutes,
            ...ErrorPagesRoutes,
        ]
    }
];
export const routing = RouterModule.forChild(routes);
