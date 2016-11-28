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
import { LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { CORPORATE_ACTIONS } from '../corporate.actions';
import { ConferenceBookingService } from './conference-booking.service';

@Injectable()
export class ConferenceBookingEffects {

    @Effect() corporatedetails$ = this.actions$
        .ofType(CORPORATE_ACTIONS.INIT)
        .switchMap(action => this.conferenceBookingService.getConferenceBooking())
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.INITIALIZED, payload: data });
        });

    @Effect() save$ = this.actions$
        .ofType(CORPORATE_ACTIONS.CONFERENCE_ADD)
        .switchMap(action => this.conferenceBookingService.saveConference(action.payload))
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.INITIALIZED, payload: data });
        });

    @Effect() myBooking$ = this.actions$
        .ofType(CORPORATE_ACTIONS.CONFERENCE_FETCH_MY_BOOKING)
        .switchMap(action => this.conferenceBookingService.getMyBooking(action.payload))
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.CONFERENCE_MY_BOOKING_FETCHED, payload: data });
        });
    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private conferenceBookingService: ConferenceBookingService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('CorporateEffects : constructor');
    }
}
