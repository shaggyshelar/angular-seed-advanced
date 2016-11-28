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
import { Education } from '../models/education';
import { ProfileState } from '../models/profile.state';

/** Context for service calls */
export const CONTEXT = 'education';

/** Service Definition */
@Injectable()
export class EducationService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<ProfileState>) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('Education Service Initialized Successfully');
    }

    getEducation(id): Observable<Education> {
        return this.get$(id).map(res => res.json());
    }   
}
