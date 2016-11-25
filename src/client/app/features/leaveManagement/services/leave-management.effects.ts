/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

/** Framework Dependencies */
import { LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { LEAVE_MANAGEMENT_ACTIONS } from './leave-management.actions';
import { LeaveManagementService } from './leave-management.service';

@Injectable()
export class LeaveManagementEffects {
    @Effect() init$ = this.actions$
        .ofType(LEAVE_MANAGEMENT_ACTIONS.INIT)
        .switchMap(
        action => {
            this.logService.debug('LeaveManagement Effects Init Action called');
            return this.leaveManagementService.getLeaves();
        }
        )
        //.map(res => ({ type: LEAVE_MANAGEMENT_ACTIONS.INITIALIZED, payload: res.json() }))
         .map(res => {
             let profile = res;
             return ({ type: LEAVE_MANAGEMENT_ACTIONS.INITIALIZED, payload: res });
         });
        // nothing reacting to failure at moment but you could if you want (here for example)
 //       .catch(() => Observable.of({ type: LEAVE_MANAGEMENT_ACTIONS.INIT_FAILED }));


        constructor(private store: Store<any>, private actions$: Actions, private leaveManagementService: LeaveManagementService, private http: Http, private logService: LogService) { }
}
