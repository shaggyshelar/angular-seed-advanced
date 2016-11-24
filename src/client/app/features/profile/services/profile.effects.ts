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
import { PROFILE_ACTIONS } from './profile.actions';
import { ProfileService } from './profile.service';

@Injectable()
export class ProfileEffects {

    @Effect() details$ = this.actions$
        .ofType(PROFILE_ACTIONS.DETAILS)
        .switchMap(action => this.profileService.getProfile(action.payload))
        .map(res => {
            let profile = res;
            return ({ type: PROFILE_ACTIONS.DETAILS_FETCHED, payload: profile });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private profileService: ProfileService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('ProfileEffects : constructor');
    }
}
