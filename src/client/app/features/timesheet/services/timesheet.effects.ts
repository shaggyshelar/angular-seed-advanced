/**
 * Timesheet Effects Module
 */

/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

/** Framework Dependencies */
import { LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { TIMESHEET_ACTIONS } from './timesheet.actions';
import { TimesheetService } from './timesheet.service';

@Injectable()
export class TimesheetEffects {
    @Effect() init$ = this.actions$
        .ofType(TIMESHEET_ACTIONS.INIT)
        .switchMap(
        action => {
            this.logService.debug('Timesheets Effects Init Action called');
            return this.timesheetService.getChildList$('employee', 0, 0, false);
        }
        )
        .map(res => ({ type: TIMESHEET_ACTIONS.INITIALIZED, payload: res.json() }))
        // nothing reacting to failure at moment but you could if you want (here for example)
        .catch(() => Observable.of({ type: TIMESHEET_ACTIONS.INIT_FAILED }));

    @Effect() add$ = this.actions$
        .ofType(TIMESHEET_ACTIONS.ADD)
        .map(action => {
            let name = action.payload;
            // analytics
            this.timesheetService.track(TIMESHEET_ACTIONS.TIMESHEET_ADDED, { label: name });
            return ({ type: TIMESHEET_ACTIONS.TIMESHEET_ADDED, payload: name });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private timesheetService: TimesheetService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('TimesheetEffects : constructor');
    }
}
