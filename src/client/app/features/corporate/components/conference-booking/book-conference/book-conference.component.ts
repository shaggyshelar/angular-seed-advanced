import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Other Module Dependencies */
import { SelectItem, Message } from 'primeng/primeng';
//import * as localForage from 'localforage';
import { CORPORATE_ACTIONS } from '../../../services/corporate.actions';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'book-conference',
    templateUrl: 'book-conference.component.html'
})

export class BookComponent {
    property: string;
    recurrance: boolean;
    recurrancePattern: string;
    recurranceEndDate: Date;
    conferenceRooms: SelectItem[];
    selectedRoom: any;
    startTime: Date;
    endTime: Date;
    msgs: Message[] = [];
    conferenceModel: ConferenceBooking;

    constructor(private store: Store<any>, private router: Router) {

        this.conferenceModel = new ConferenceBooking(0, '', new Date(), new Date(), false, '', '', {});

        this.conferenceRooms = [];
        this.conferenceRooms.push({ label: 'Select Room', value: null });
        this.conferenceRooms.push({ label: 'Bahamas', value: { id: 1, name: 'Bahamas', color: '#E7C5F5' } });
        this.conferenceRooms.push({ label: 'Dubai', value: { id: 2, name: 'Dubai', color: '#3FABA4' } });
        this.conferenceRooms.push({ label: 'Cape Town', value: { id: 3, name: 'Cape Town', color: '#35AA47' } });
        this.conferenceRooms.push({ label: 'Hong Kong', value: { id: 4, name: 'Hong Kong', color: '#FF9655' } });
        this.conferenceRooms.push({ label: 'Houston', value: { id: 4, name: 'Houston', color: '#428BCA' } });
        this.conferenceRooms.push({ label: 'Barcelona', value: { id: 5, name: 'Barcelona', color: '#D05454' } });
        this.conferenceRooms.push({ label: 'Caribbean', value: { id: 5, name: 'Caribbean', color: '#8877A9' } });
        this.conferenceRooms.push({ label: 'Trainning Room', value: { id: 5, name: 'Trainning Room', color: '#DFBA49' } });
    }
    save() {
        this.conferenceModel.Room = {
            Name: this.selectedRoom.name,
            Color: this.selectedRoom.color
        }
        this.conferenceModel.color = this.selectedRoom.color;
        this.store.dispatch({ type: CORPORATE_ACTIONS.CONFERENCE_ADD, payload: this.conferenceModel });
        // localForage.setItem('conferenceEvent', this.conferenceModel, (err, value) => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'success', summary: 'Confirmed', detail: 'Record saved' });
        //     this.router.navigate(['../conferenceBooking']);
        // });
    }
}
class ConferenceBooking {
    constructor(
        public id: number,
        public title: string,
        public start: Date,
        public end: Date,
        public allDay: boolean,
        public color: string,
        public conference: string,
        public Room: Object
    ) { }
}
