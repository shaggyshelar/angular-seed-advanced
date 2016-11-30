/** Angular Dependencies */
import { Router } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from '../../services/leave.actions';

/** Component Declaration */

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}

export class Holiday {
  title: string;
  date: string;
  day: string;
  type: string;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'view-holidays',
  templateUrl: 'holidays.component.html'
})

export class HolidaysComponent {

  holidaysObs: Observable<any>;
  servRows = 7;

  holidays: any;
  events: any[];

  eventDay: MyEvent;
  dialogVisible: boolean = false;

  holidayDetails: boolean = false;
  holidayTitle: string;
  holidayDay: string;
  holidayDate: string;
  holidayType: string;

  constructor(
    private router: Router, private store: Store<any>, private logService: LogService
  ) {
    this.holidays = [];
  }

  //private holidayRecords;

  //constructor(private store: Store<AppState>, private holidayService: HolidayService) {
  //let holidayRecords = this.holidayRecords;
  // this.subscription = store.select('holidays')
  //   .subscribe(holidays => {
  //     holidayRecords = holidays;
  //     if (holidayRecords.length === 0) {
  //       holidayService.getHolidays();
  //     }
  //   });
  //}

  ngOnInit() {

    this.store.dispatch({ type: LEAVE_ACTIONS.HOLIDAYS, payload: 1 });
    this.holidaysObs = this.store.select('leave');
    this.holidaysObs.subscribe(res => {
      this.holidays = res ? this.arrangeData(res.holidays) : [];
    });

    // this.holidays = [
    //   { title: 'Lakshmi Puja', date: '30-10-2016', day: 'Sunday', type: 'Fixed' },
    //   { title: 'Bhai Duj', date: '01-11-2016', day: 'Tuesday', type: 'Fixed' },
    //   { title: 'Christmas', date: '25-12-2016', day: 'Sunday', type: 'Fixed' },
    //   { title: 'New Year', date: '01-01-2017', day: 'Sunday', type: 'Fixed' },
    //   { title: 'Makar Sankaranti', date: '14-01-2017', day: 'Saturday', type: 'Fixed' },
    //   { title: 'Republic Day', date: '26-01-2017', day: 'Thursday', type: 'Fixed' },
    //   { title: 'Holi', date: '13-03-2017', day: 'Monday', type: 'Fixed' },
    // ];

    // this.events = [
    //   { 'title': 'Lakshmi Puja', 'start': '2016-10-30' },
    //   { 'title': 'Bhai Duj', 'start': '2016-11-01' },
    //   { 'title': 'Christmas', 'start': '2016-12-25' },
    //   { 'title': 'New Year', 'start': '2017-01-01' },
    //   { 'title': 'Makar Sankaranti', 'start': '2017-01-14' },
    //   { 'title': 'Republic Day', 'start': '2017-01-26' },
    //   { 'title': 'Holi', 'start': '2017-03-13' },
    // ];

    //this.holidayRecords = this.holidayService.getComments();
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  handleEventClicked(event) {
    let start = event.calEvent.start;
    start.stripTime();
    this.holidayTitle = event.calEvent.title;
    this.holidayDate = start.format();
    this.dialogVisible = true;
  }

  clicked(holiday) {
    this.holidayDate = holiday.date;
    this.holidayDay = holiday.day;
    this.holidayTitle = holiday.title;
    this.holidayType = holiday.type;
    this.holidayDetails = true;

  }

  arrangeData(params) {
    // var bufDate;
    // var newHoliday: any[] = [];
    // for (var index in params) {
    //   newHoliday.push({
    //     id: params[index].id,
    //     title: params[index].title,
    //     start: null,//+params[index].holidaysDate,
    //     weekDay: ''+params[index].weekDay,
    //     holidayType: ''+params[index].holidayType
    //   });
    //   console.log(JSON.stringify(params[index]));
    // }
    console.log(JSON.stringify(params));
    // return newHoliday;
  }

}
