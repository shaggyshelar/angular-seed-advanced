import { Feature } from '../models/feature';
import { Injectable, } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CustomAnalytics, AnalyticsService } from '../../../frameworks/analytics/index';

@Injectable()
export class FeatureService  extends CustomAnalytics  {

    constructor(public analytics: AnalyticsService, public http: Http) { 
        super(analytics, http);
    }

    addFeature(feature: Feature) {
        let url = this.toURL('api/Feature/Add');
        let headers = new Headers();
        let body = JSON.stringify(feature);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body,options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getFeatures() {
        let url = this.toURL('api/Feature/GetFeatures');
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
             .map(this.extractData)
            .catch(this.handleError);
    }

    deleteFeature(feature: Feature) {
        let url = this.toURL('api/Feature/Delete');
        let headers = new Headers();
        let body = JSON.stringify(feature);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    editFeature(feature: Feature) {
        let url = this.toURL('api/Feature/Edit');
        let body = JSON.stringify(feature);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || {};
    }
}
