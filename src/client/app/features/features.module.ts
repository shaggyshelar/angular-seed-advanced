/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Module Level Dependencies */
//Components
// import { FeaturesComponent } from './features.component';

//Routes
import { routing } from './features.routes';
// Modules
import { AuthModule } from './core/auth/auth.module';
import { DashboardModule } from './core/dashboard/dashboard.module';
// import { UserModule } from './users/users.module';
//import { TimesheetModule } from './timesheet/index';

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
        // StoreModule.provideStore(FeaturesModule.reducers()),
        // UserModule,
        AuthModule,
        DashboardModule,
        routing,
        FormsModule
        //TimesheetModule,
    ],
    exports: [],
    //declarations: [FeaturesComponent],
    providers: [],
})
export class FeaturesModule {
    // static reducers(): ActionReducer<any> {

    //     let actionReducers: ActionReducer<any>[] = featureRoutes
    //         .filter(route => (route.data && route.data['reducers']))
    //         .map(route => route.data['reducers']).filter(() => true);
    //     return combineReducers(Object.assign({},
    //         //{ i18n: multilingualReducer },
    //         ...actionReducers
    //     ));
    // }
}
