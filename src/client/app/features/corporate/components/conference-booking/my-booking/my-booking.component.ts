import { OnInit, Component } from '@angular/core';

/** Other Module Dependencies */
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from '../../../../core/shared/services/message.service';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { ConferenceBookingService } from '../../../services/conference-booking.service';
import { Conference } from '../../../models/conference';

/** Component Declaration */
@Component({
    moduleId: module.id,
    selector: 'my-booking',
    templateUrl: 'my-booking.component.html',
    styleUrls: ['my-booking.component.css']
})

export class MyBookingComponent implements OnInit {
    bookings: Observable<Conference[]>;
    conferenceRooms: any[];
    constructor(private messageService: MessageService, private conferenceBookingService: ConferenceBookingService, private confirmationService: ConfirmationService) {
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
        this.getMyBooking();
    }
    getMyBooking() {
        this.bookings = this.conferenceBookingService.getMyBooking(0);
    }
    confirm(ticket) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.conferenceBookingService.deleteMyBooking(ticket.Id).subscribe(results => {
                    this.getMyBooking();
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Record deleted' });
                });
            }
        });
    }
}
