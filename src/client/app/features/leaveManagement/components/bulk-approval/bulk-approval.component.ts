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

  leaveObs: Observable<any>;

  servRows = 5;
  requests: any[];
  selectedEmployees: ShowLeaveReq[];

  model: FormFieldClass;
  approved: boolean = false;
  rejected: boolean = false;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService
  ) {
    this.requests = [];

    // this.requests = [
    //   { eid: 23132, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
    //   { eid: 23133, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
    //   { eid: 23134, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
    //   { eid: 23135, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
    // ];

    this.model = new FormFieldClass('');
    this.selectedEmployees = [];
  }

  ngOnInit() {
    this.store.dispatch({ type: LEAVE_ACTIONS.DETAILS, payload: 1 });
    this.leaveObs = this.store.select('leave');
    this.leaveObs.subscribe(res =>{
      this.requests = res ? res.leaves : [];
      if (res)
        console.log('from bulk-approval data: ' + JSON.stringify(res.leaves));
    });
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
