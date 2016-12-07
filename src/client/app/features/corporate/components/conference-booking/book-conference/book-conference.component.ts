import { Router } from '@angular/router';
import { OnInit,Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Other Module Dependencies */
import { SelectItem } from 'primeng/primeng';
//import * as localForage from 'localforage';
import { ConferenceBookingService } from '../../../services/conference-booking.service';
import { MessageService } from '../../../../core/shared/services/message.service';
/** Component Declaration */
@Component({
    moduleId: module.id,
    selector: 'book-conference',
    templateUrl: 'book-conference.component.html'
})

export class BookComponent implements OnInit {
    property: string;
    recurrance: boolean;
    recurrancePattern: string;
    recurranceEndDate: Date;
    conferenceRooms: SelectItem[];
    selectedRoom: any;
    startTime: Date;
    endTime: Date;
    conferenceForm: FormGroup;
    constructor(private messageService: MessageService, private formBuilder: FormBuilder, private conferenceBookingService: ConferenceBookingService, private router: Router) {
        this.conferenceRooms = [];
        this.conferenceRooms.push({ label: 'Select Room', value: null });
        this.conferenceRooms.push({ label: 'Bahamas', value: { id: 1, Name: 'Bahamas', Color: '#E7C5F5' } });
        this.conferenceRooms.push({ label: 'Dubai', value: { id: 2, Name: 'Dubai', Color: '#3FABA4' } });
        this.conferenceRooms.push({ label: 'Cape Town', value: { id: 3, Name: 'Cape Town', Color: '#35AA47' } });
        this.conferenceRooms.push({ label: 'Hong Kong', value: { id: 4, Name: 'Hong Kong', Color: '#FF9655' } });
        this.conferenceRooms.push({ label: 'Houston', value: { id: 4, Name: 'Houston', Color: '#428BCA' } });
        this.conferenceRooms.push({ label: 'Barcelona', value: { id: 5, Name: 'Barcelona', Color: '#D05454' } });
        this.conferenceRooms.push({ label: 'Caribbean', value: { id: 5, Name: 'Caribbean', Color: '#8877A9' } });
        this.conferenceRooms.push({ label: 'Trainning Room', value: { id: 5, Name: 'Trainning Room', Color: '#DFBA49' } });
    }
    ngOnInit() {
        this.conferenceForm = this.formBuilder.group({
            //id: [null],
            title: ['', [Validators.required]],
            start: ['', [Validators.required]],
            end: ['', [Validators.required]],
            Room: ['', [Validators.required]],
        });
    }
    onSubmit({ value, valid }: { value: IConferenceForm, valid: boolean }) {
        value.color = value.Room.Color;
        this.conferenceBookingService.saveConference(value).subscribe(result => {
            if (result) {
                this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Conference Room Booked' });
                this.router.navigate(['/corporate/conferenceBooking']);
            }
        });
    }
    onCancel() {
        this.router.navigate(['/corporate/conferenceBooking']);
    }
}
export interface IConferenceForm {
    id: number;
    Room: Select;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    color: string;
}
interface Select {
    id: number;
    Name: string;
    Color: string;
};
