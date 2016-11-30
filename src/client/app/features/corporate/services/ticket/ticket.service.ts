/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
//import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { LogService, AnalyticsService } from '../../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../../core/index';
import { Ticket } from '../../models/ticket';
// import { Employee } from '../models/employee';
import { CorporteState } from '../../models/corporate.state';

/** Context for service calls */
export const CONTEXT = 'ticket';

/** Service Definition */
@Injectable()
export class TicketService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<CorporteState>) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('getTicketList  Initialized Successfully');
        // this.store.dispatch({ type: PROFILE_ACTIONS.INIT });
    }

    /**
     * getTicketById method
     */
    getTicketById(id): Observable<Ticket> {
        return this.get$(id).map(res => res.json());
    }

    /**
     * getTicketById method
     */
    saveTicket(ticket): Observable<any> {
        return this.post$(ticket).map(res => res.json());
    }

    /**
     * getTicketById method
     */
    editTicket(ticket): Observable<any> {
        return this.put$(ticket.id, ticket).map(res => res.json());
    }

    /**
     * getTicketList method
     */
    getTicketList(): Observable<any> {
        this.logService.debug('TicketService : getTicketList method');
        return this.getList$().map(res => res.json());
    }
}
