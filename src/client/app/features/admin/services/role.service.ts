/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
import { Role } from '../models/role';
/** Context for service calls */
export const CONTEXT = 'role';

/** Service Definition */
@Injectable()
export class RoleService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }

    getRoles(): Observable<Role[]> {
        return this.getList$(0,0,true).map(res => res.json());
    }
    addRole(role:Role): Observable<any> {
        return this.post$(role,true).map(res => res.json());
    }
    editRole(role:Role): Observable<any> {
        return this.put$(role.ID,role,true).map(res => res.json());
    }
    getRoleById(roleID): Observable<any> {
        return this.get$(roleID,true).map(res => res.json());
    }
    deleteRole(roleID): Observable<any> {
        return this.delete$(roleID,true);
    }
}
