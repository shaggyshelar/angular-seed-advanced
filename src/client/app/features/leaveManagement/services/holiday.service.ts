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
import { Holiday } from '../models/holiday';
// import { Employee } from '../models/employee';
import { LeaveState } from '../models/leave.state';

/** Context for service calls */
export const CONTEXT = 'holidays';

/** Service Definition */
@Injectable()
export class HolidayService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<LeaveState>) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('Holiday Service Initialized Successfully');
       // this.store.dispatch({ type: PROFILE_ACTIONS.INIT });
    }

    /**
     * getHolidays method
     */

    getHolidays(): Observable<Holiday> {
        return this.getList$().map(res=> res.json());
    }
}
