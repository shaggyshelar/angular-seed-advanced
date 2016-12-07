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
import { User } from '../models/user';
import { LeaveDetail } from '../models/leaveDetail';

/** Context for service calls */
export const CONTEXT = 'Users';

/** Service Definition */
@Injectable()
export class UserService extends BaseService {
    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('Profile Service Initialized Successfully');
        // this.store.dispatch({ type: PROFILE_ACTIONS.INIT });
    }

    getUserDetails(): Observable<User> {
        return this.getList$().map(res => res.json());
    }

    getLeaveDetails(param): Observable<LeaveDetail> {
        return this.getChildList$(param).map(res => res.json())
    }
}