// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { MessageService } from '../../../core/shared/services/message.service';
import { LeaveService } from '../../services/leave.service';
import { UserService } from '../../services/user.service'
import { Leave } from '../../models/leave';
import { LeaveDetail } from '../../models/leaveDetail';


// app
import { MyLeavesComponent } from './my-leaves.component';

let urlVar: string = '';

export function main() {

    t.describe('Component: MyLeavesComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule, CommonModule],
                declarations: [MyLeavesComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub },
                    { provide: LeaveService, useClass: LeaveServiceStub },
                    { provide: UserService, useClass: UserServiceStub },
                    { provide: MessageService, useclass: MessageServiceStub }
                ]
            });
        });


        t.it('should have defined MyLeavesComponent',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            })
        );
    });
}



@Component({
    selector: 'test-cmp',
    template: '<leaves></leaves>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { urlVar = url[0]; }
}

class UserServiceStub {
    stubDetails = {
        "LeaveList": [
            {
                "ID": 6527,
                "User": {
                    "ID": 12345,
                    "Name": "FName Lname",
                    "Department": "EBS"
                },
                "Type": {
                    "ID": 3,
                    "Title": "Absent"
                },
                "StartDate": "2016-12-11T18:30:00.000Z",
                "EndDate": "2016-12-11T18:30:00.000Z",
                "NumberOfLeave": 1,
                "Comment": "Granted",
                "Status": "Approved",
                "Reason": "Going home",
                "Approvers": [
                    {
                        "Project": "HRMS",
                        "Manager": "Sagar Shelar",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "EBS",
                        "Manager": "Kunal Adhikari",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "HR",
                        "Manager": "Pooja Merchant",
                        "Status": "Approved",
                        "Comment": "Approved"
                    }
                ]
            },
            {
                "ID": 6137,
                "User": {
                    "ID": 12345,
                    "Name": "FName Lname",
                    "Department": "EBS"
                },
                "Type": {
                    "ID": 3,
                    "Title": "Absent"
                },
                "StartDate": "2017-01-31T18:30:00.000Z",
                "EndDate": "2017-02-28T18:30:00.000Z",
                "NumberOfLeave": 2,
                "Comment": "Granted",
                "Status": "Partially Approved",
                "Reason": "holiday",
                "Approvers": [
                    {
                        "Project": "HRMS",
                        "Manager": "Sagar Shelar",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "EBS",
                        "Manager": "Kunal Adhikari",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "HR",
                        "Manager": "Pooja Merchant",
                        "Status": "Approved",
                        "Comment": "Approved"
                    }
                ]
            },
            {
                "ID": 6522,
                "User": {
                    "ID": 12345,
                    "Name": "FName Lname",
                    "Department": "EBS"
                },
                "Type": {
                    "ID": 1,
                    "Title": "Leave"
                },
                "StartDate": "2016-12-08T18:30:00.000Z",
                "EndDate": "2016-12-08T18:30:00.000Z",
                "NumberOfLeave": 1,
                "Comment": "Granted",
                "Status": "Approved",
                "Reason": "Birthday",
                "Approvers": [
                    {
                        "Project": "HRMS",
                        "Manager": "Sagar Shelar",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "EBS",
                        "Manager": "Kunal Adhikari",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "HR",
                        "Manager": "Pooja Merchant",
                        "Status": "Approved",
                        "Comment": "Approved"
                    }
                ]
            },
            {
                "ID": 6524,
                "User": {
                    "ID": 12345,
                    "Name": "FName Lname",
                    "Department": "EBS"
                },
                "Type": {
                    "ID": 4,
                    "Title": "Half Day Absent"
                },
                "StartDate": "2016-12-11T18:30:00.000Z",
                "EndDate": "2016-12-11T18:30:00.000Z",
                "NumberOfLeave": 0.5,
                "Comment": "",
                "Status": "",
                "Reason": "Personal",
                "Approvers": [
                    {
                        "Project": "HRMS",
                        "Manager": "Sagar Shelar",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "EBS",
                        "Manager": "Kunal Adhikari",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "HR",
                        "Manager": "Pooja Merchant",
                        "Status": "Approved",
                        "Comment": "Approved"
                    }
                ]
            },
            {
                "ID": 6000,
                "User": {
                    "ID": 12345,
                    "Name": "FName Lname",
                    "Department": "EBS"
                },
                "Type": {
                    "ID": 4,
                    "Title": "Half Day Absent"
                },
                "StartDate": "2016-11-30T18:30:00.000Z",
                "EndDate": "2016-11-30T18:30:00.000Z",
                "NumberOfLeave": 0.5,
                "Comment": "Approved",
                "Status": "Approved",
                "Reason": "Personal",
                "Approvers": [
                    {
                        "Project": "HRMS",
                        "Manager": "Sagar Shelar",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "EBS",
                        "Manager": "Kunal Adhikari",
                        "Status": "Approved",
                        "Comment": "Approved"
                    },
                    {
                        "Project": "HR",
                        "Manager": "Pooja Merchant",
                        "Status": "Approved",
                        "Comment": "Approved"
                    }
                ]
            }
        ],
        "NumberOfLeave": 5,
        "HalfDayLeave": 10,
        "Absent": 0,
        "HalfDayAbsent": 0
    };

    getLeaveDetails() {
        return new Observable<LeaveDetail>(observer => { observer.next(this.stubDetails) })
    }
}

class LeaveServiceStub {
    stubLeaves = [
        {
            "ID": 6527,
            "User": {
                "ID": 12345,
                "Name": "FName Lname",
                "Department": "EBS"
            },
            "Type": {
                "ID": 3,
                "Title": "Absent"
            },
            "StartDate": "2016-12-11T18:30:00.000Z",
            "EndDate": "2016-12-11T18:30:00.000Z",
            "NumberOfLeave": 1,
            "Comment": "Granted",
            "Status": "Approved",
            "Reason": "Going home",
            "Approvers": [
                {
                    "Project": "HRMS",
                    "Manager": "Sagar Shelar",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "EBS",
                    "Manager": "Kunal Adhikari",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "HR",
                    "Manager": "Pooja Merchant",
                    "Status": "Approved",
                    "Comment": "Approved"
                }
            ]
        },
        {
            "ID": 6137,
            "User": {
                "ID": 12345,
                "Name": "FName Lname",
                "Department": "EBS"
            },
            "Type": {
                "ID": 3,
                "Title": "Absent"
            },
            "StartDate": "2017-01-31T18:30:00.000Z",
            "EndDate": "2017-02-28T18:30:00.000Z",
            "NumberOfLeave": 2,
            "Comment": "Granted",
            "Status": "Partially Approved",
            "Reason": "holiday",
            "Approvers": [
                {
                    "Project": "HRMS",
                    "Manager": "Sagar Shelar",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "EBS",
                    "Manager": "Kunal Adhikari",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "HR",
                    "Manager": "Pooja Merchant",
                    "Status": "Approved",
                    "Comment": "Approved"
                }
            ]
        },
        {
            "ID": 6522,
            "User": {
                "ID": 12345,
                "Name": "FName Lname",
                "Department": "EBS"
            },
            "Type": {
                "ID": 1,
                "Title": "Leave"
            },
            "StartDate": "2016-12-08T18:30:00.000Z",
            "EndDate": "2016-12-08T18:30:00.000Z",
            "NumberOfLeave": 1,
            "Comment": "Granted",
            "Status": "Approved",
            "Reason": "Birthday",
            "Approvers": [
                {
                    "Project": "HRMS",
                    "Manager": "Sagar Shelar",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "EBS",
                    "Manager": "Kunal Adhikari",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "HR",
                    "Manager": "Pooja Merchant",
                    "Status": "Approved",
                    "Comment": "Approved"
                }
            ]
        },
        {
            "ID": 6524,
            "User": {
                "ID": 12345,
                "Name": "FName Lname",
                "Department": "EBS"
            },
            "Type": {
                "ID": 4,
                "Title": "Half Day Absent"
            },
            "StartDate": "2016-12-11T18:30:00.000Z",
            "EndDate": "2016-12-11T18:30:00.000Z",
            "NumberOfLeave": 0.5,
            "Comment": "",
            "Status": "",
            "Reason": "Personal",
            "Approvers": [
                {
                    "Project": "HRMS",
                    "Manager": "Sagar Shelar",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "EBS",
                    "Manager": "Kunal Adhikari",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "HR",
                    "Manager": "Pooja Merchant",
                    "Status": "Approved",
                    "Comment": "Approved"
                }
            ]
        },
        {
            "ID": 6000,
            "User": {
                "ID": 12345,
                "Name": "FName Lname",
                "Department": "EBS"
            },
            "Type": {
                "ID": 4,
                "Title": "Half Day Absent"
            },
            "StartDate": "2016-11-30T18:30:00.000Z",
            "EndDate": "2016-11-30T18:30:00.000Z",
            "NumberOfLeave": 0.5,
            "Comment": "Approved",
            "Status": "Approved",
            "Reason": "Personal",
            "Approvers": [
                {
                    "Project": "HRMS",
                    "Manager": "Sagar Shelar",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "EBS",
                    "Manager": "Kunal Adhikari",
                    "Status": "Approved",
                    "Comment": "Approved"
                },
                {
                    "Project": "HR",
                    "Manager": "Pooja Merchant",
                    "Status": "Approved",
                    "Comment": "Approved"
                }
            ]
        }
    ];
    getLeaves() {
        return new Observable<Leave>(observer => { observer.next(this.stubLeaves) })
    }
}

class MessageServiceStub {
    addMessage(message) {
        return;
    }
}
