/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */

import { OnInit } from '@angular/core';

export class ShowLeaveReq {
  eid: number;
  employee: string;
  numberofleaves: number;
  status: string;
  start: string;
  end: string;
  approvers: string;
  pending: string;
}

@BaseComponent({
  moduleId: module.id,
  selector: 'approve-leave',
  templateUrl: 'lms-approveleave.component.html'
})
export class LmsApproveLeavesComponent implements OnInit {

  approvalRecords: ShowLeaveReq[];
  servRows = 10;

  ngOnInit() {
    this.approvalRecords = [
      { eid: 23123, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23124, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' }
    ];

  }
}
