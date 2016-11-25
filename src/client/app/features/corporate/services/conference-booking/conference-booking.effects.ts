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
import { LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { CORPORATE_ACTIONS } from '../corporate.actions';
import { ConferenceBookingService } from './conference-booking.service';

@Injectable()
export class ConferenceBookingEffects {
    @Effect() init$ = this.actions$
        .ofType(CORPORATE_ACTIONS.CONFERENCE_BOOKING_INIT)
        .switchMap(action => this.conferenceBookingService.getList$())
        .map(res => ({ type: CORPORATE_ACTIONS.CONFERENCE_BOOKING_INITIALIZED, payload: res.json() }))
        // nothing reacting to failure at moment but you could if you want (here for example)
        //.catch(() => Observable.of({ type: CORPORATE_ACTIONS.INIT_FAILED }));

    // @Effect() add$ = this.actions$
    //     .ofType(TIMESHEET_ACTIONS.ADD)
    //     .map(action => {
    //         let name = action.payload;
    //         // analytics
    //         this.timesheetService.track(TIMESHEET_ACTIONS.TIMESHEET_ADDED, { label: name });
    //         return ({ type: TIMESHEET_ACTIONS.TIMESHEET_ADDED, payload: name });
    //     });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private conferenceBookingService: ConferenceBookingService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('ConferenceBookingEffects : constructor');
    }
}
