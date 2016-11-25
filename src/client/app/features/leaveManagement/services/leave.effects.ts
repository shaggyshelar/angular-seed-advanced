/**
 * Timesheet Effects Module
 */

/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
//import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

/** Framework Dependencies */
import { LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from './leave.actions';
import { LeaveService } from './leave.service';

@Injectable()
export class LeaveEffects {

    @Effect() details$ = this.actions$
        .ofType(LEAVE_ACTIONS.DETAILS)
        .switchMap(
        action => this.leaveService.getLeaves())
        .map(res => {
            return ({ type: LEAVE_ACTIONS.DETAILS_FETCHED, payload: res });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private leaveService: LeaveService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('ProfileEffects : constructor');
    }
}
