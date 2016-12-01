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
import { USER_LIST_ACTIONS } from './user.actions';
import { UserListService } from './user.service';

/**
 * UserListEffects Definition
 */
@Injectable()
export class UserListEffects {

    @Effect() init$ = this.actions$
        .ofType(USER_LIST_ACTIONS.INIT)
        .switchMap(action => this.userList.getList$())
        .map(res => ({ type: USER_LIST_ACTIONS.INITIALIZED, payload: res.json() }))
        // nothing reacting to failure at moment but you could if you want (here for example)
        .catch(() => Observable.of({ type: USER_LIST_ACTIONS.INIT_FAILED }));

    @Effect() add$ = this.actions$
        .ofType(USER_LIST_ACTIONS.ADD)
        .map(action => {
            let name = action.payload;
            // analytics
            //this.userList.track(USER_LIST_ACTIONS.USER_ADDED, { label: name });
            return ({ type: USER_LIST_ACTIONS.USER_ADDED, payload: name });
        });

    @Effect() details$ = this.actions$
        .ofType(USER_LIST_ACTIONS.DETAILS)
        .switchMap(action => this.userList.get$(action.payload))
        .map(res => {
            let user = res.json();
            //this.userList.track(USER_LIST_ACTIONS.DETAILS_FETCHED, { label: user.id });
            return ({ type: USER_LIST_ACTIONS.DETAILS_FETCHED, payload: user });
        });

    constructor(private store: Store<any>, private actions$: Actions, private userList: UserListService, private http: Http, private logService: LogService) { }
}
