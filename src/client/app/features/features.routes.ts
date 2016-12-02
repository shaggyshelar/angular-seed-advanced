/** Angular Dependencies */
import { Routes, RouterModule } from '@angular/router';

/** Module Level Dependencies */
//Components
import { DashboardComponent, DashboardContainerComponent } from './core/dashboard/index';
//Modules
import { AuthGuard } from './core/index';

// import { UsersRoutes, UserModule } from './users/index';
//import { TimesheetModule } from './timesheet/index';

// //Routes
//import { AuthRoutes } from './core/index';

/** Feature Routes Definition */
export const featureRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    // {
    //     path: 'user',
    //     children: [...UsersRoutes],
    //     canActivate: [AuthGuard],
    //     data: {
    //         reducers: UserModule.reducers()
    //     }
    // }, {
    //     path: 'timesheet',
    //     children: [...TimesheetRoutes],
    //     canActivate: [AuthGuard],
    //     data: {
    //         reducers: TimesheetModule.reducers()
    //     }
    // }
];

/** DO NOT UPDATE BELOW CODE */
/** Features Main routes */
const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'app',
    //     pathMatch: 'full'

    // },
    //...AuthRoutes,
    {
        path: '',
        component: DashboardContainerComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'timesheet',
                loadChildren: 'app/features/timesheet/timesheet.module#TimesheetModule'
            }
        ]
        // children: [
        //     ...featureRoutes,
        //     ...ErrorPagesRoutes,
        // ]
    }
];
export const routing = RouterModule.forChild(routes);
