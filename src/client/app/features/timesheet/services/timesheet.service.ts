/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
import { Timesheet } from '../models/timesheet';
import { Employee } from '../models/employee';
import { TimesheetState } from '../models/timesheet.state';
import { TIMESHEET_ACTIONS } from './timesheet.actions';

/** Context for service calls */
export const CONTEXT = 'timesheet';

/** Service Definition */
@Injectable()
export class TimesheetService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, private store: Store<TimesheetState>) {
        super(analyticsService, http, CONTEXT);
        this.store.dispatch({ type: TIMESHEET_ACTIONS.INIT });
    }

    /**
     * getTimesheets method
     */
    getTimesheets(): Observable<Timesheet> {
        return this.getList$().map(res => res.json());
    }

    /**
     * getEmployeesDefinition
     */
    getEmployees(): Observable<Employee> {
        return this.getChildList$('employee').map(res => res.json());
    }
}
