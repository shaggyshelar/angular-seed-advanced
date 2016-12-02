/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
import { Timesheet } from '../models/timesheet';
import { Employee } from '../models/employee';

/** Context for service calls */
export const CONTEXT = 'timesheet';

/** Service Definition */
@Injectable()
export class TimesheetService extends BaseService {

    constructor(public http: Http, public logService: LogService) {
        super(http, CONTEXT, logService);
        this.logService.debug('Timehsheet Service Initialized Successfully');
    }

    /**
     * getTimesheets method
     */
    getTimesheets(): Observable<Timesheet> {
        this.logService.debug('TimesheetService : getTimesheets method');
        return this.getList$().map(res => res.json());
    }

    /**
     * getEmployeesDefinition
     */
    getEmployees(): Observable<Employee> {
        this.logService.debug('TimesheetService : getEmployees method');
        return this.getChildList$('employee').map(res => res.json());
    }
}
