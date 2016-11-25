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
import { Employee } from '../models/employee';
import { Leave } from '../models/leave';
import { LeaveManagementState } from '../models/leave-management.state';
import { LEAVE_MANAGEMENT_ACTIONS } from './leave-management.actions';

/** Context for service calls */
export const CONTEXT = 'leaves';

/** Service Definition */
@Injectable()
export class LeaveManagementService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<LeaveManagementState>) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('LeaveManagement Service Initialized');
        this.store.dispatch({ type: LEAVE_MANAGEMENT_ACTIONS.INIT });
    }

/**
 * getLeavesRecord method
 */
      getLeaves(): Observable<Leave> {
         this.logService.debug('ProfileService : getProfile method');
         return this.getList$().map(res => res.json());
     }
}
