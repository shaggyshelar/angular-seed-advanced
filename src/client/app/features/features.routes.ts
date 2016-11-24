/** Angular Dependencies */
import { Routes, RouterModule } from '@angular/router';

/** Module Level Dependencies */
//Components
import { DashboardComponent, DashboardContainerComponent } from './core/dashboard/index';
//Modules
import { ErrorPagesRoutes } from './core/index';

import { UsersRoutes, UserModule } from './users/index';
import { TimesheetRoutes, TimesheetModule } from './timesheet/index';
import { CorporateRoutes } from './corporate/index';

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
        data: {
            reducers: UserModule.reducers()
        }
    }, {
        path: 'timesheet',
        children: [...TimesheetRoutes],
        data: {
            reducers: TimesheetModule.reducers()
        }
    },
    {
        path: 'corporate',
        children: [...CorporateRoutes],
        data: {
          //  reducers: CorporateModule.reducers()
        }
    }
];

/** DO NOT UPDATE BELOW CODE */
/** Features Main routes */
const routes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'

    },
    ...AuthRoutes,
    {
        path: 'app',
        component: DashboardContainerComponent,
        children: [
            ...featureRoutes,
            ...ErrorPagesRoutes,
        ]
    }
];
export const routing = RouterModule.forChild(routes);
