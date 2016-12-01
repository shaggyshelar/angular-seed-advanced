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
import { Skill } from '../models/skill';
// import { Employee } from '../models/employee';
import { ProfileState } from '../models/profile.state';

/** Context for service calls */
export const CONTEXT = 'Skill';

/** Service Definition */
@Injectable()
export class SkillService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<ProfileState>) {
        super(analyticsService, http, CONTEXT, logService);
    }

    getSkills(): Observable<Skill> {
        return this.getList$().map(res => res.json());
    }

    addSkill(params): Observable<boolean> {
        return this.post$(params).map(res => res.status === 200 ? true : false);
    }

    updateSkill(id, params): Observable<boolean> {
        return this.put$(id, params).map(res => res.status === 200 ? true : false);
    }
}
