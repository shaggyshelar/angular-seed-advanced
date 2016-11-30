import { OnInit } from '@angular/core';

/** Other Module Dependencies */
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';

/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { CORPORATE_ACTIONS } from '../../../services/corporate.actions';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'my-booking',
    templateUrl: 'my-booking.component.html',
    styleUrls: ['my-booking.component.css']
})

export class MyBookingComponent implements OnInit {
    bookings: Array<Object>;
    msgs: Message[] = [];
    conferenceRooms: any[];
    serverEvents: Observable<any>;
    constructor(private store: Store<any>, private confirmationService: ConfirmationService) {
        this.conferenceRooms = [{
            name: 'Bahamas',
            color: '#E7C5F5'
        },
        {
            name: 'Dubai',
            color: '#3FABA4'
        }, {
            name: 'Cape Town',
            color: '#35AA47'
        }, {
            name: 'Hong Kong',
            color: '#FF9655'
        }, {
            name: 'Caribbean',
            color: '#8877A9'
        }, {
            name: 'Houston	',
            color: '#428BCA'
        }, {
            name: 'Barcelona',
            color: '#D05454'
        }, {
            name: 'Trainning Room',
            color: '#DFBA49'
        },
        ];
    }
    ngOnInit() {
        this.store.dispatch({ type: CORPORATE_ACTIONS.CONFERENCE_FETCH_MY_BOOKING, payload: '1' });
        this.store.select('corporate').subscribe((res: any) => {
            if (res && res.myBookingList) {
                this.bookings = res.myBookingList;
            }
        });
    }
    confirm() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            }
        });
    }
}
