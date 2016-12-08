/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
import { EmploymentHistory } from '../models/employmentHistory';

/** Context for service calls */
export const CONTEXT = 'EmploymentHistory';

/** Service Definition */
@Injectable()
export class EmploymentHistoryService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }

    getEmploymentHistory(): Observable<EmploymentHistory> {
        return this.getList$().map(res => res.json());
    }

    addEmploymentHistory(params): Observable<boolean> {
        return this.post$(params).map(res => res.status === 200 ? true : false);
    }

    updateEmploymentHistory(id, params): Observable<boolean> {
        return this.put$(id, params).map(res => res.status === 200 ? true : false);
    }
}
