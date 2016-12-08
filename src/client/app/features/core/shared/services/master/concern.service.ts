/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../index';

/** Context for service calls */
export const CONTEXT = 'concernMaster';

/** Service Definition */
@Injectable()
export class ConcernService extends BaseService {
    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }
    getConcernList() {
        return this.getList$(0,0,true).map(res => res.json());
    }
}
