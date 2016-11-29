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
import { Uan } from '../models/uan';
import { ProfileState } from '../models/profile.state';

/** Context for service calls */
export const CONTEXT = 'Uan';

/** Service Definition */
@Injectable()
export class UanService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<ProfileState>) {
        super(analyticsService, http, CONTEXT, logService);
    }

    getUan(id): Observable<Uan> {
        return this.get$(id).map(res => res.json());
    }
}
