/** Angular Dependencies */
import { Router } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

/** Module Level Dependencies */
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave';

/** Component Declaration */


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

  servRows = 20;
  requests: any[];
  selectedEmployees: any[];
  msgs: Message[] = [];

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
      //    BACKEND CALL HERE
      this.sendRequest('Approved');
    }
  }

  rejectClicked() {
    if (this.selectedEmployees.length > 0) {
      //    BACKEND CALL HERE
      this.sendRequest('Rejected');
    }
  }

  assembleReqPayload(status: string) {
    var payload = [];
    for (var index in this.selectedEmployees) {
      payload.push(
        {
          ID: this.selectedEmployees[index].ID,
          Comment: this.model.comments,
          Status: status
        });
    }

    return payload;
  }

  sendRequest(status) {
    return this.leaveService.updateLeaveRecord(1, this.assembleReqPayload(status)).subscribe(res => {
      if (res) {
        if (status === 'Rejected') {
          this.rejected = false;
          this.approved = true;
          this.msgs = [];
          this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Leaves rejected!' });
        } else {
          this.rejected = true;
          this.approved = false;
          this.msgs = [];
          this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Leaves approved!' });
        }
        this.leaveObs = this.leaveService.getLeaves();
        this.model.comments = '';
        this.selectedEmployees = [];
      } else {
        this.logService.debug('Fail');
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Failed', detail: 'Failed to process your request.' });
      }
    });
  }

}
