/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../../../framework.ref';
import { BaseService } from '../../../index';

/** Context for service calls */
export const CONTEXT = 'CertificationMaster';

/** Service Definition */
@Injectable()
export class CertificationMasterService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }

    getCertificationMaster(): Observable<any> {
        return this.getList$().map(res => res.json());
    }
}
