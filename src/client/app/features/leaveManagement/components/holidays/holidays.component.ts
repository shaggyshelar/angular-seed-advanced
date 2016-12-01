/** Angular Dependencies */
import { Router } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Module Level Dependencies */
import { HolidayService } from '../../services/holiday.service';
import { Holiday } from '../../models/holiday';

/** Component Declaration */

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'view-holidays',
  templateUrl: 'holidays.component.html'
})

export class HolidaysComponent {

  holidaysObs: Observable<Holiday>;
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
    private router: Router, private store: Store<any>, private logService: LogService, private holidayService: HolidayService
  ) {
    this.holidays = [];
  }


  ngOnInit() {
    this.holidaysObs = this.holidayService.getHolidays();

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
    // TODO : Code For Arrange Leave
  }

}
