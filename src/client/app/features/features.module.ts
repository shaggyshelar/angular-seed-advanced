/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Third Party Dependencies */
import { combineReducers, ActionReducer, StoreModule } from '@ngrx/store';

/** Framework Dependencies */
//import { multilingualReducer } from './framework.ref';

/** Module Level Dependencies */
//Components
import { FeaturesComponent } from './features.component';

//Routes
import { routing, featureRoutes } from './features.routes';
// Modules
import { AuthModule } from './core/auth/auth.module';
import { DashboardModule } from './core/dashboard/dashboard.module';
import { UserModule } from './users/users.module';
import { TimesheetModule } from './timesheet/index';
import { ProfileModule } from './profile/index';
import { LeaveModule } from './leaveManagement/index';

/**
 * 
 import { LoginComponent } from './app/components/login/login.component';
import { UnauthorizedAccessComponent } from './app/components/errorPages/unauthorizedAccess/unauthorizedAccess.component';
import { ChangePasswordModule } from './app/components/changePassword/index';

 */
//import {CorporateModule} from './corporate/index';
/**  Module Definition */
@NgModule({
    imports: [
        StoreModule.provideStore(FeaturesModule.reducers()),
        UserModule,
        AuthModule,
        DashboardModule,
        routing,
        FormsModule,
        TimesheetModule,
        ProfileModule,
        LeaveModule
    ],
    exports: [],
    declarations: [FeaturesComponent],
    providers: [],
})
export class FeaturesModule {
    static reducers(): ActionReducer<any> {

        let actionReducers: ActionReducer<any>[] = featureRoutes
            .filter(route => (route.data && route.data['reducers']))
            .map(route => route.data['reducers']).filter(() => true);
        return combineReducers(Object.assign({},
            //{ i18n: multilingualReducer },
            ...actionReducers
        ));
    }
}
