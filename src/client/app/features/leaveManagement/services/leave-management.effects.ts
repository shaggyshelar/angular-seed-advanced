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
    // @Effect() init$ = this.actions$
    //     .ofType(LEAVE_MANAGEMENT_ACTIONS.INIT)
    //     .switchMap(
    //     action => {
    //         this.logService.debug('Timesheets Effects Init Action called');
    //         return this.leaveManagementService.getChildList$('employee', 0, 0, false);
    //     }
    //     )
    //     .map(res => ({ type: LEAVE_MANAGEMENT_ACTIONS.INITIALIZED, payload: res.json() }))
    //     // nothing reacting to failure at moment but you could if you want (here for example)
    //     .catch(() => Observable.of({ type: LEAVE_MANAGEMENT_ACTIONS.INIT_FAILED }));

        constructor(
            leaveManagementService: LeaveManagementService
        ) { }
}
