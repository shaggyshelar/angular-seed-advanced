/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { LogService, AnalyticsService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
/** Context for service calls */
export const CONTEXT = 'permission';

/** Service Definition */
@Injectable()
export class PermissionService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('PermissionService  Initialized Successfully');
    }

    getAllPermission(): Observable<any> {
        this.logService.debug('PermissionService : getConferenceBooking method');
        return this.getList$(0,0,true).map(res => res.json());
    }
    getPermissionsByRole(roleId): Observable<any> {
        return this.get$(roleId,true).map(res => res.json());
    }
    addPermissionToRole(permission): Observable<any> {
        return this.post$(permission,true).map(res => res.json());
    }

}
