/** Angular Dependencies */
import { Router } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Module Level Dependencies */
import { LeaveService } from '../../services/leave.service';
import { UserService } from '../../services/user.service'
import { Leave } from '../../models/leave';
import { LeaveDetail } from '../../models/leaveDetail';

/** Component Declaration */


@BaseComponent({
  moduleId: module.id,
  selector: 'leaves',
  templateUrl: 'my-leaves.component.html'
})
export class MyLeavesComponent {
  public leaveObs: Observable<Leave>;
  public leaveDetObs: Observable<LeaveDetail>;
  public leaveDetailObs: Observable<LeaveDetail>;
  servRows = 5;
  leaves: {};
  leave: any;

  constructor(
    private router: Router, private logService: LogService, private leaveService: LeaveService, private userService: UserService
  ) {
    this.leaves = [];
  }

  ngOnInit() {
    this.leaveObs = this.leaveService.getLeaves();
    this.leaveDetObs = this.userService.getLeaveDetails('LeaveDetails');
  }

  applyLeaveClicked() {
    this.router.navigate(['/leave/apply-leave']);
  }

  updateBtnClicked(id) {
    this.router.navigate(['/leave/update-leave', id]);
  }

  arrangeData(leaveParam) {
    // TODO : Convert response into flat object
  }
}
