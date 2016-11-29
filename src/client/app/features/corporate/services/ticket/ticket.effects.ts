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
import { TicketService } from './ticket.service';

@Injectable()
export class TicketEffects {

    @Effect() ticketDetails$ = this.actions$
        .ofType(CORPORATE_ACTIONS.TICKET_INIT)
        .switchMap(action => this.ticketService.getTicketList())
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.TICKET_INITIALIZED, payload: data });
        });

    @Effect() getTicketById$ = this.actions$
        .ofType(CORPORATE_ACTIONS.TICKET_GET)
        .switchMap(action => this.ticketService.getTicketById(action.payload))
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.TICKET_DETAILS_FETCHED, payload: data });
        });

    @Effect() save$ = this.actions$
        .ofType(CORPORATE_ACTIONS.TICKET_ADD)
        .switchMap(action => this.ticketService.saveTicket(action.payload))
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.TICKET_INITIALIZED, payload: data });
        });

    @Effect() edit$ = this.actions$
        .ofType(CORPORATE_ACTIONS.TICKET_EDIT)
        .switchMap(action => this.ticketService.editTicket(action.payload))
        .map(res => {
            let data = res;
            return ({ type: CORPORATE_ACTIONS.TICKET_INITIALIZED, payload: data });
        });


    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private ticketService: TicketService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('TicketEffects : constructor');
    }
}
