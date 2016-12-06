// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';

import { Observable } from 'rxjs/Rx';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave';

// app
import { BulkApproveComponent } from './bulk-approval.component';

export function main() {

    t.describe('Component: BulkApproveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [BulkApproveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: LeaveService, useClass: LeaveServiceStub }
                ]
            });
        });

        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }));
    });
}



@Component({
    selector: 'test-cmp',
    template: '<bulkapproval></bulkapproval>'
})
class TestComponent { }

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