/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
//import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { LogService, AnalyticsService } from '../../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../../core/index';
import { AdminState } from '../../models/admin.state';

/** Context for service calls */
export const CONTEXT = 'feature';

/** Service Definition */
@Injectable()
export class FeatureService extends BaseService {

    constructor(public analyticsService: AnalyticsService, public http: Http, public logService: LogService, private store: Store<AdminState>) {
        super(analyticsService, http, CONTEXT, logService);
        this.logService.debug('FeatureService  Initialized Successfully');
    }

    getFeatures(): Observable<any> {
        this.logService.debug('FeatureService : getConferenceBooking method');
        return this.getList$(0,0,true).map(res => res.json());
    }

    addFeature(feature): Observable<any> {
        return this.post$(feature,true).map(res => res.json());
    }

    editFeature(feature): Observable<any> {
        return this.put$(feature.id,feature,true).map(res => res.json());
    }

    deleteFeature(featureId): Observable<any> {
        return this.delete$(featureId,true).map(res => res.json());
    }
}
