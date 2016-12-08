/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';

/** Framework Level Dependencies */
import { AnalyticsService } from '../../framework.ref';

/** Module Level Dependencies */
import { BaseService } from '../../core/index';
//import { Leave } from '../../models/leave';
// import { Employee } from '../models/employee';
import { Conference } from '../models/conference';

/** Context for service calls */
export const CONTEXT = 'conferenceBooking';

/** Service Definition */
@Injectable()
export class ConferenceBookingService extends BaseService {
    selectedSlot: any;

    constructor(public analyticsService: AnalyticsService, public http: Http) {
        super(analyticsService, http, CONTEXT);
    }
    setSelectedSlot(event) {
        this.selectedSlot = event;
    }
    getSelectedSlot() {
       return this.selectedSlot;
    }
    getConferenceBooking(): Observable<Conference[]> {
        return this.getList$().map(res => res.json());
    }

    saveConference(conference): Observable<any> {
        return this.post$(conference, true).map(res => res.json());
    }

    getConferenceById(id): Observable<Conference> {
        return this.get$(id, true).map(res => res.json());
    }

    deleteMyBooking(id): Observable<any> {
        return this.delete$(id, true);
    }
}
