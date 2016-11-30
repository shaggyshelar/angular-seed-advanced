/** Angular Dependencies */
import { Routes, RouterModule } from '@angular/router';

/** Module Level Dependencies */
//Components
import { DashboardComponent, DashboardContainerComponent } from './core/dashboard/index';
//Modules
import { ErrorPagesRoutes } from './core/index';

/** Feature Routes Definition */
export const featureRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
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
    // ...AuthRoutes,
    // {
    //     path: '',
    //     component: DashboardContainerComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //         ...featureRoutes,
    //         ...ErrorPagesRoutes,
    //     ]
    // }
];
export const routing = RouterModule.forChild(routes);
