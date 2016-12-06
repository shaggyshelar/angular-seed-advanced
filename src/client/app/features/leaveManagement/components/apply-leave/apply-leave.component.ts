/** Angular Dependencies */
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { LeaveService } from '../../services/leave.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Component Declaration */

class FormFieldClass {
    constructor(
        public User: { ID: number, Name: string },
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
    leaveObs: Observable<boolean>;
    userObs: Observable<User>;
    leaveTypeValid: boolean = true;
    leaveID: number;
    strtDt: any;
    endDt: any;
    minDate: Date;
    charsLeft: number = 600;
    isLeaveAdded: boolean = false;
    isEndDtEnable: boolean = true;
    dayCount: any;
    leaves: any = [
        { label: 'Leave', value: 1 },
        { label: 'Half-day Leave', value: 2 },
        { label: 'Absent', value: 3 },
        { label: 'Half-day Absent', value: 4 }
    ];
    model: FormFieldClass;

    constructor(
        private router: Router,
        private store: Store<any>,
        private logService: LogService,
        private userService: UserService,
        private leaveService: LeaveService
    ) {
        this.model = new FormFieldClass({ ID: 12345, Name: 'Lname Fname' }, 1, 'select', new Date(), new Date(), '');
    }

    ngOnInit() {

        this.logService.debug('ApplyLeaveComponent OnInit');
        this.userObs = this.userService.getUserDetails();
    }

    submitForm(form: NgForm) {
        this.validateLeaveType();
        if (!this.leaveTypeValid)
            return;

        //call to backend submit
        let params = {
            User: this.model.User,
            NumberOfLeave: this.model.numDays,
            StartDate: this.model.start,
            EndDate: this.model.end,
            Comment: '',
            Status: '',
            Reason: this.model.reason,
            Approvers: [
                {
                    Project: 'HRMS',
                    Manager: 'Sagar Shelar',
                    Status: 'Approved',
                    Comment: 'Approved'
                },
                {
                    Project: 'EBS',
                    Manager: 'Kunal Adhikari',
                    Status: 'Approved',
                    Comment: 'Approved'
                },
                {
                    Project: 'HR',
                    Manager: 'Pooja Merchant',
                    Status: 'Approved',
                    Comment: 'Approved'
                }
            ],
            Type: { ID: this.leaveID, Title: this.model.leaveType }
        };
        this.leaveService.addLeaveRecord(params).subscribe(res => {
            res ? this.router.navigate(['/leave/my-leaves']) : this.logService.debug('res : ' + res);
        });
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
        this.isLeaveAdded = true;
    }

    validateLeaveType() {
        switch (this.model.leaveType) {
            case 'Leave':
                this.leaveTypeValid = true;
                this.isEndDtEnable = true;
                this.leaveID = 1;
                return;

            case 'Half-day Leave':
                this.leaveTypeValid = true;
                this.model.numDays = 0.5;
                this.isEndDtEnable = false;
                this.leaveID = 2;
                return;

            case 'Absent':
                this.leaveTypeValid = true;
                this.isEndDtEnable = true;
                this.leaveID = 3;
                return;

            case 'Half-day Absent':
                this.leaveTypeValid = true;
                this.model.numDays = 0.5;
                this.isEndDtEnable = false;
                this.leaveID = 4;
                return;

            default:
                this.leaveTypeValid = false;
        }
    }

    reasonTextChanged() {
        this.charsLeft = 600 - this.model.reason.length;
        (this.model.reason.length > 3) ? this.isLeaveAdded = true : this.isLeaveAdded = false;
    }

    dayDiffCalc() { // input given as Date objects
        var dDate1 = this.model.start;
        var dDate2 = this.model.end;
        var iWeeks, iDateDiff, iAdjust = 0;
        if (dDate2 < dDate1) return -1; // error code if dates transposed
        var iWeekday1 = dDate1.getDay(); // day of week
        var iWeekday2 = dDate2.getDay();
        iWeekday1 = (iWeekday1 === 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
        iWeekday2 = (iWeekday2 === 0) ? 7 : iWeekday2;
        if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
        iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
        iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;

        // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
        iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000);

        if (iWeekday1 <= iWeekday2) {
            iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1);
        } else {
            iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2);
        }

        iDateDiff -= iAdjust; // take into account both days on weekend

        this.model.numDays = this.dayCount = (iDateDiff + 1); // add 1 because dates are 
        return this.dayCount;
    }

    cancelClick() {
        this.router.navigate(['/leave/my-leaves']);
    }

}
