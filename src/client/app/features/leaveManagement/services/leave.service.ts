/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { LogService, AnalyticsService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
import { Leave } from '../models/leave';
// import { Employee } from '../models/employee';
import { LeaveState } from '../models/leave.state';

/** Context for service calls */
export const CONTEXT = 'Leave';

/** Service Definition */
@Injectable()
export class LeaveService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<LeaveState>) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('Profile Service Initialized Successfully');
       // this.store.dispatch({ type: PROFILE_ACTIONS.INIT });
    }

    /**
     * getLeave method
     * Gets leave object corresponding to ID specified
     */
    getLeave(id): Observable<Leave> {
        return this.get$(id).map(res => res.json());
    }

    /**
     * getLeaves method
     * Gets array of leaves
     */
    getLeaves(): Observable<Leave> {
        return this.getList$().map(res => res.json());
    }
}
