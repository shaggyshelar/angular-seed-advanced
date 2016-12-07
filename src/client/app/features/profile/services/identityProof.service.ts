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
import { IdentityProof } from '../models/identityProof';

/** Context for service calls */
export const CONTEXT = 'IdentityProof';

/** Service Definition */
@Injectable()
export class IdentityProofService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }

    getIdentityProof(): Observable<IdentityProof> {
        return this.getList$().map(res => res.json());
    }

    addIdentityProof(params): Observable<boolean> {
        return this.post$(params).map(res => res.status === 200 ? true : false);
    }

    updateIdentityProof(id, params): Observable<boolean> {
        return this.put$(id, params).map(res => res.status === 200 ? true : false);
    }
}
