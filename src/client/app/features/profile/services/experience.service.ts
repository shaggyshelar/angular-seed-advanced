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
import { Experience } from '../models/experience';
import { ProfileState } from '../models/profile.state';

/** Context for service calls */
export const CONTEXT = 'Experience';

/** Service Definition */
@Injectable()
export class ExperienceService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<ProfileState>) {
        super(analyticsService, http, CONTEXT, logService);
    }

    getExperience(): Observable<Experience> {
        return this.getList$().map(res => res.json());
    }

    addExperience(params): Observable<boolean> {
        return this.post$(params).map(res => res.status === 200 ? true : false);
    }

    updateExperience(id, params): Observable<boolean> {
        return this.put$(id, params).map(res => res.status === 200 ? true : false);
    }
}
