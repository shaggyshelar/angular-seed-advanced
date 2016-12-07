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
import { ChangePassword } from '../models/changePassword';

/** Context for service calls */
export const CONTEXT = 'ChangePassword';

/** Service Definition */
@Injectable()
export class ChangePasswordService extends BaseService {
    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }


    /**
     * changePassword method
     * Put request to change password.
     * @ID : Parameter : ID of user to update
     * @payload : Parameter : Object of entity to be updated
     */
    changePassword(payload): Observable<boolean> {
        return this.post$(payload).map(res => res.status === 200 ? true : false);
    }
}
