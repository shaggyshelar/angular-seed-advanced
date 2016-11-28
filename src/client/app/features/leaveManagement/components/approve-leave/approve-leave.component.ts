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

import { OnInit } from '@angular/core';

@BaseComponent({
  moduleId: module.id,
  selector: 'approve-leave',
  templateUrl: 'approve-leave.component.html'
})
export class ApproveLeaveComponent implements OnInit {

  leaveObs: Observable<any>
  approvalRecords: any[];
  servRows = 10;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.approvalRecords = [
      { eid: 23123, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' },
      { eid: 23124, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' }
    ];

    this.store.dispatch({ type: LEAVE_ACTIONS.DETAILS, payload: 1 });
    this.leaveObs = this.store.select('leave');
    this.leaveObs.subscribe(res =>{
      this.approvalRecords = res ? res.leaves : [];
      if (res)
        console.log('from approve-leave data: ' + JSON.stringify(res.leaves));
    });
  }


  editBtnClicked() {
    this.router.navigate(['/leave/single-approval']);
  }
}
