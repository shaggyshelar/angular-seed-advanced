/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../../../core/index';
import { Select } from '../../../../leaveManagement/models/select';
// import { Employee } from '../models/employee';

/** Context for service calls */
export const CONTEXT = 'LeaveTypes';

/** Service Definition */
@Injectable()
export class LeaveTypeMasterService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }

    /**
     * getHolidays method
     * Gets array of Holiday objects
     */
    getLeaveTypes(): Observable<Select> {
        return this.getList$().map(res=> res.json());
    }
}
