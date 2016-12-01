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

  leaveObs: Observable<Leave>;

  servRows = 5;
  requests: any[];
  selectedEmployees: ShowLeaveReq[];

  model: FormFieldClass;
  approved: boolean = false;
  rejected: boolean = false;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService,
    private leaveService: LeaveService
  ) {
    this.requests = [];

    this.model = new FormFieldClass('');
    this.selectedEmployees = [];
  }

  ngOnInit() {
    this.leaveObs = this.leaveService.getLeaves();
  }

  approveClicked() {
    if (this.selectedEmployees.length > 0) {
      this.rejected = false;
      this.approved = true;
      //    BACKEND CALL HERE
      return;
    }
  }

  rejectClicked() {
    if (this.selectedEmployees.length > 0) {
      this.rejected = true;
      this.approved = false;
      //    BACKEND CALL HERE
      return;
    }
  }

}
