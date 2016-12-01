// /**
//  * Timesheet Effects Module
//  */

// /** Angular Dependencies */
// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

// /** Third Party Dependencies */
// //import { Observable } from 'rxjs/Rx';
// import { Store } from '@ngrx/store';
// import { Effect, Actions } from '@ngrx/effects';

// /** Framework Dependencies */
// import { LogService } from '../../../framework.ref';

// /** Module Level Dependencies */
// import { ADMIN_ACTIONS } from '../admin.actions';
// import { FeatureService } from './feature.service';

// @Injectable()
// export class FeatureEffects {

//     @Effect() get$ = this.actions$
//         .ofType(ADMIN_ACTIONS.FEATURE_INIT)
//         .switchMap(action => this.featureService.getFeatures())
//         .map(res => {
//             let data = res;
//             return ({ type: ADMIN_ACTIONS.FEATURE_INITIALIZED, payload: data });
//         });

//     @Effect() save$ = this.actions$
//         .ofType(ADMIN_ACTIONS.FEATURE_ADD)
//         .switchMap(action => this.featureService.addFeature(action.payload))
//         .map(res => {
//             let data = res;
//             return ({ type: ADMIN_ACTIONS.FEATURE_INITIALIZED, payload: data });
//         });

//     @Effect() edit$ = this.actions$
//         .ofType(ADMIN_ACTIONS.FEATURE_EDIT)
//         .switchMap(action => this.featureService.editFeature(action.payload))
//         .map(res => {
//             let data = res;
//             return ({ type: ADMIN_ACTIONS.FEATURE_INITIALIZED, payload: data });
//         });

//     @Effect() delete$ = this.actions$
//         .ofType(ADMIN_ACTIONS.FEATURE_DELETE)
//         .switchMap(action => this.featureService.deleteFeature(action.payload))
//         .map(res => {
//             let data = res;
//             return ({ type: ADMIN_ACTIONS.FEATURE_INITIALIZED, payload: data });
//         });
        
//     constructor(
//         private store: Store<any>,
//         private actions$: Actions,
//         private featureService: FeatureService,
//         private http: Http,
//         private logService: LogService
//     ) {
//         this.logService.debug('CorporateEffects : constructor');
//     }
// }
