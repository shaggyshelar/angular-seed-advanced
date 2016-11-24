/** Angular Dependencies */

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */

/** Component Declaration */

class ShowLeaveReq {
  eid: number;
  employee: string;
  numberofleaves: number;
  status: string;
  start: string;
  end: string;
  approvers: string;
}

class FormFieldClass {
  constructor(
    public comments: string
  ) { }
}

@BaseComponent({
  moduleId: module.id,
  selector: 'bulkapproval',
  templateUrl: 'bulk-approval.component.html',
  styleUrls: ['bulk-approval.component.css']
})
export class BulkApproveComponent {

  servRows = 5;
  requests: any[];
  selectedEmployees: ShowLeaveReq[] = [];

  model: FormFieldClass;
  approved: boolean = false;
  rejected: boolean = false;

  constructor() {
    this.requests = [
      { eid: 23132, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23133, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23134, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23135, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
    ];

    this.model = new FormFieldClass('');
    this.selectedEmployees = [];
  }

  approveClicked() {
    this.rejected = false;
    this.approved = true;
    if (this.selectedEmployees.length > 0) {
      //    BACKEND CALL HERE
      return;
    }
  }

  rejectClicked() {
    this.rejected = true;
    this.approved = false;
    if (this.selectedEmployees.length > 0) {
      return;
    }
  }

}
