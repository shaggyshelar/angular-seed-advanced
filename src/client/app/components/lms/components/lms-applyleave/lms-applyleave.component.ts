import {BaseComponent} from '../views/base-component';
import { NgForm } from '@angular/forms';
//import * as localForage from 'localforage';


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
    public end: Date,
    public start: Date,
    public reason: string
  ) { }
}

@BaseComponent({
  moduleId: module.id,
  selector: 'apply-leave',
  templateUrl: 'lms-applyleave.component.html',
  styleUrls: ['lms-applyleave.component.css']
})

export class LmsApplyLeavesComponent {

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

  constructor() {
    this.model = new FormFieldClass(1, 'select', new Date(), new Date(), '');
  }

  submitForm(form: NgForm) {
    console.log(form);
    this.validateLeaveType();
    if (this.leaveTypeInvalid)
      return;

    //call to backend submit
    //this.addToLocalforage();
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
    console.log('addLeaves() was called');
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

  addToLocalforage() {
    var finalData = {
      ID: 1,
      start: this.model.start.getDate() + '-' + this.model.start.getMonth() + '-' + this.model.start.getFullYear(),
      end: this.model.end.getDate() + '-' + this.model.end.getMonth() + '-' + this.model.end.getFullYear(),
      numDays: this.model.numDays,
      leave: this.model.leaveType,
      reason: this.model.reason,
      empName: 'Employee Name',
      status: 'Pending'
    };

    // localForage.setItem('appliedLeave', finalData, (err, value) => {
    //   alert('added');
    // });
  }

  dayDiffCalc() {
    this.dayCount = (Math.round((this.endDt - this.strtDt) / (1000 * 60 * 60 * 24))) + 1;
    this.model.numDays = this.dayCount;
  }
}
