/** Angular Dependencies */
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from '../../services/leave.actions';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Component Declaration */


class FinalLeaveData {
  ID: number;
  start: any;
  end: any;
  numDays: number;
  leave: string;
  reason: string;
  empName: string;
  status: string;
}

class FormFieldClass {
  constructor(
    public numDays: number,
    public leaveType: any,
    public end: any,
    public start: any,
    public reason: string
  ) { }
}

@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'apply-leave.component.html',
  styleUrls: ['apply-leave.component.css']
})

export class ApplyLeaveComponent implements OnInit {
  leaveObs: Observable<any>;
  leave: any;
  leaveTypeInvalid: boolean = true;
  strtDt: any;
  endDt: any;
  minDate: Date;
  numDays: number = 0;
  charsLeft: number = 600;
  leavesHidden: boolean = true;
  dayCount: any;
  leaves: any = [
    { label: 'Leave', value: 1 },
    { label: 'Half-day Leave', value: 2 },
    { label: 'Absent', value: 3 },
    { label: 'Half-day Absent', value: 4 }
  ];
  model: FormFieldClass;

  constructor(
    private router: Router,private store: Store<any>, private logService: LogService
  ) {
    this.model = new FormFieldClass(1, 'select', new Date(), new Date(), '');
  }

  ngOnInit() {
    this.store.dispatch({ type: LEAVE_ACTIONS.DETAILS, payload: 1 });
    this.leaveObs = this.store.select('leave');
    this.leaveObs.subscribe(res =>
      this.leave = res ? res.leave : {}
    );
  }
  submitForm(form: NgForm) {
    this.validateLeaveType();
    if (this.leaveTypeInvalid)
      return;

    //call to backend submit
  }

  startChanged() {
    this.model.end = this.model.start;
    this.minDate = this.model.start;
  }

  endChanged() {
    this.strtDt = this.model.start;
    this.endDt = this.model.end;
    this.dayDiffCalc();
  }

  addLeaves() {
    //TODO : Add leave fuunctinality
  }

  validateLeaveType() {
    if (this.model.leaveType === 'select') {
      this.leaveTypeInvalid = true;
    } else {
      this.leaveTypeInvalid = false;
    }
  }

  reasonTextChanged() {
    this.charsLeft = 600 - this.model.reason.length;
  }

  dayDiffCalc() {
    this.dayCount = (Math.round((this.endDt - this.strtDt) / (1000 * 60 * 60 * 24))) + 1;
    this.model.numDays = this.dayCount;
  }

  cancelClick() {
    this.router.navigate(['/leave/my-leaves']);
  }

}
