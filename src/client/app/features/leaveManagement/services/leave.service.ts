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
import { LeaveDetail } from '../models/leaveDetail';

/** Context for service calls */
export const CONTEXT = 'Leave';

/** Service Definition */
@Injectable()
export class LeaveService extends BaseService {
    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('Leave Service Initialized Successfully');
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

    /**
     * getLeaveArray method
     * Gets child array in the object to be returned. List of applied leaves, in this case
     * @methodParam mandatory parameter
     */
    getLeaveArray(methodParam): Observable<LeaveDetail> {
        return this.getChildList$(methodParam).map(res => res.json());
    }

    /**
     * addLeaveRecord method
     * Adds leave record. returns true if successful, false if not.
     */
    addLeaveRecord(leavePayload): Observable<boolean> {
        return this.post$(leavePayload).map(res => res.status === 201 ? true : false);
    }

    /**
     * getChildRecord method
     * Gets data form the path extension specified.
     * @params : Parameter : path extension
     */
    getChildRecord(params): Observable<any> {
        return this.getChildList$(params).map(res => res.json());
    }

    /**
     * updateLeaveRecord method
     * Put request to update a record.
     * @ID : Parameter : ID of entity to update
     * @payload : Parameter : Object with properties of entity to be updated
     */
    updateLeaveRecord(ID, payload): Observable<boolean> {
        return this.put$(ID, payload).map(res => res.status === 200 ? true : false);
    }

    /**
     * deleteLeaveRecord method
     * Delete request to delete a record.
     * @ID : Parameter : ID of entity to update
     */
    deleteLeaveRecord(ID): Observable<boolean> {
        return this.delete$(ID).map((res) => {
            return res.status === 200 ? true : false;
        });
    }
}
