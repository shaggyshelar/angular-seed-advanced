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
import { Nominee } from '../models/nominee';

/** Context for service calls */
export const CONTEXT = 'Nominee';

/** Service Definition */
@Injectable()
export class NomineesService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }

    getNominees(): Observable<Nominee> {
        return this.getList$().map(res => res.json());
    }

    addNominee(params): Observable<boolean> {
        return this.post$(params).map(res => res.status === 200 ? true : false);
    }

    updateNominee(id, params): Observable<boolean> {
        return this.put$(id, params).map(res => res.status === 200 ? true : false);
    }
}
