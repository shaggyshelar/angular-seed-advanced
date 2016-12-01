/** Angular Dependencies */
import { Router } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Module Level Dependencies */
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave';

/** Component Declaration */

import { OnInit } from '@angular/core';

@BaseComponent({
  moduleId: module.id,
  selector: 'approve-leave',
  templateUrl: 'approve-leave.component.html'
})
export class ApproveLeaveComponent implements OnInit {

  leaveObs: Observable<Leave>;
  approvalRecords: any[];
  servRows = 10;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService,
    private leaveService: LeaveService
  ) { }

  ngOnInit() {

    this.logService.debug('ApproveLeaveComponent OnInit');
    this.leaveObs = this.leaveService.getLeaves();
  }


  editBtnClicked(id) {
    this.router.navigate(['/leave/single-approval', id]);
  }
}
