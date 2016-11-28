/**
 * Holiday Effects Module
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
import { HolidayService } from './holiday.service';

@Injectable()
export class HolidayEffects {

    @Effect() details$ = this.actions$
        .ofType(LEAVE_ACTIONS.DETAILS)
        .switchMap(
        action => this.holidayService.getHolidays())
        .map(res => {
            return ({ type: LEAVE_ACTIONS.HOLIDAYS_FETCHED, payload: res });
        });

    @Effect() detail$ = this.actions$
        .ofType(LEAVE_ACTIONS.DETAIL)
        .map(res => {
            let param = res.payload;
            this.holidayService.track(LEAVE_ACTIONS.HOLIDAYS_FETCHED, { label: param });
            return ({ type: LEAVE_ACTIONS.HOLIDAYS_FETCHED, payload: param });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private holidayService: HolidayService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('ProfileEffects : constructor');
    }
}
