/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

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
  templateUrl: 'lms-bulkapproval.component.html',
  styleUrls: ['lms-bulkapproval.component.css']
})
export class LmsBulkApproveComponent {

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
      alert('approved!');
      //    BACKEND CALL HERE
      return;
    }
  }

  rejectClicked() {
    this.rejected = true;
    this.approved = false;
    if (this.selectedEmployees.length > 0) {
      alert('rejected!');
      //    BACKEND CALL HERE
      return;
    }
  }

}
