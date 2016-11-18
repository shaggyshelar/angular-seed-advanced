/** Angular Dependencies */
import { OnInit, Inject, ElementRef } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
//import * as localForage from 'localforage';
/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Other Module Dependencies */
import * as moment from 'moment/moment';
import * as _ from 'lodash';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'conference-booking',
    templateUrl: 'conference.component.html',
    styleUrls: ['conference.component.css']
})
export class ConferenceComponent implements OnInit {
    elementRef: ElementRef;

    events: any[];
    allEvents: any[];
    header: any;
    selectedEvent: MyEvent;
    dialogVisible: boolean = false;
    idGen: number = 100;
    headerConfig: any;
    minTime: string;
    maxTime: string;
    conferenceRooms: any[];
    selectedRoom: string;
    constructor(private router: Router, private route: ActivatedRoute, @Inject(ElementRef) elementRef: ElementRef) {
        this.selectedEvent = new MyEvent(0, '', '', '', false);
        this.elementRef = elementRef;
        this.events = [];
    }
    ngAfterViewInit() {
        var el: HTMLElement = this.elementRef.nativeElement;
        var slots = el.querySelectorAll('.ui-widget-content');
        _.forEach(slots, function (elem, key) {
            if (key !== 0) {
                elem.addEventListener('mouseover', function (event) {
                    if (!this.innerHTML && !this.className.includes('fc-axis')) {
                      this.innerHTML='<div class="btn calender-btn-add"  style="float:right">+Add</div>';
                    }
                });
                elem.addEventListener('mouseout', function (event) {
                    if (!this.className.includes('fc-axis')) {
                         this.innerHTML='';
                    }
                });
            }
        });
    }
    ngOnInit() {

        this.minTime = '07:00:00';
        this.maxTime = '20:00:00';
        if (window.screen.width < 768) {
            this.headerConfig = {
                left: 'prev,next today',
                center: 'title',
                right: 'agendaWeek,agendaDay'
            };
        } else {
            this.headerConfig = {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            };
        }

        this.allEvents = [
            {
                'title': 'Inteview',
                'start': moment().add(2, 'hours'),
                'end': moment().add(4, 'hours'),
                'color': '#8877A9',
                'conference': 'Caribbean'
            },
            {
                'title': 'Jenzabar Client call',
                'start': moment(),
                'end': moment().add(3, 'hours'),
                'color': '#3FABA4',
                'conference': 'Dubai'
            },
            {
                'title': 'Product Meeting',
                'start': moment().subtract(3, 'hours'),
                'end': moment().subtract(1, 'hours'),
                'color': '#FF9655',
                'conference': 'Hong Kong'
            },
            {
                'title': 'Tccc client call',
                'start': moment().subtract(3, 'hours'),
                'end': moment().subtract(2, 'hours'),
                'color': '#3FABA4',
                'conference': 'Dubai'
            },
            {
                'title': 'Standup Meeting',
                'start': moment().add(1, 'd').subtract(3, 'hours'),
                'end': moment().add(1, 'd').subtract(1, 'hours'),
                'color': '#E7C5F5',
                'conference': 'Bahamas'
            },
            {
                'title': 'NGO/NPO Meeting',
                'start': moment().add(1, 'd').subtract(3, 'hours'),
                'end': moment().add(1, 'd').subtract(2, 'hours'),
                'color': '#8877A9',
                'conference': 'Caribbean'
            },
            {
                'title': 'Conference',
                'start': moment().subtract(1, 'd').subtract(3, 'hours'),
                'end': moment().subtract(1, 'd').subtract(2, 'hours'),
                'color': '#D05454',
                'conference': 'Barcelona'
            },
            {
                'title': 'Interview',
                'start': moment().subtract(1, 'd'),
                'end': moment().subtract(1, 'd').add(3, 'hours'),
                'color': '#DFBA49',
                'conference': 'Trainning Room'
            }
        ];
    //    localForage.getItem('conferenceEvent').then((value) => {
    //         if (value !== null) {
    //             this.allEvents.push(value);
    //         }
    //         this.events = this.allEvents;
    //     });
        this.events = this.allEvents;
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
        this.route.params.forEach((params: Params) => {
            let room = params['room'];
            if (room) {
                this.getEventByRooms(room);
            } else {
                this.getEventByRooms('AllRooms');
            }
        });
    };
    handleDayClick() {
        this.router.navigate(['/newBooking']);
    }

    handleEventClicked(event: any) {
        this.selectedEvent = event.calEvent;
        this.selectedEvent.start = moment(this.selectedEvent.start).format('DD/MM/YY hh:MM a');
        this.selectedEvent.end = moment(this.selectedEvent.end).format('DD/MM/YY hh:MM a');
        this.dialogVisible = true;
    }

    getEventByRooms(room: string) {
        this.selectedRoom = room;
        if (room === 'AllRooms') {
            this.events = this.allEvents;
        } else {
            this.events = _.filter(this.allEvents, function (item) {
                return item.conference === room;
            });
        }
    }
}
class MyEvent {
    constructor(
        public id: number,
        public title: string,
        public start: string,
        public end: string,
        public allDay: boolean
    ) { }
}
