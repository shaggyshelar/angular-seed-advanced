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


@BaseComponent({
  moduleId: module.id,
  selector: 'leaves',
  templateUrl: 'my-leaves.component.html'
})
export class MyLeavesComponent {
  public leaveObs: Observable<any>;
  servRows = 5;
  leaves: {};
  leave: any;

  constructor(
    private router: Router, private store: Store<any>, private logService: LogService
  ) {
    this.leaves = [];
  }

  ngOnInit() {
    this.store.dispatch({ type: LEAVE_ACTIONS.DETAILS, payload: 1 });
    this.leaveObs = this.store.select('leave');
    this.leaveObs.subscribe(res => {
      this.leave = res ? this.arrangeData(res.leaves) : [];
    }
    );

    // this.leaves = [
    //   { empName: 'Person1 LName', start: '22-09-2016', end: '23-09-2016', numDays: 2, status: 'Approved' },
    //   { empName: 'Person1 LName', start: '22-08-2016', end: '22-08-2016', numDays: 1, status: 'Approved' },
    //   { empName: 'Person1 LName', start: '02-10-2016', end: '03-10-2016', numDays: 2, status: 'Approved' }
    // ];
  }

  applyLeaveClicked() {
    this.router.navigate(['/leave/apply-leave']);
  }

  updateBtnClicked(id) {
    this.router.navigate(['/leave/update-leave', id]);
  }

  arrangeData(leaveParam) {
    // TODO : Convert response into flat object
    if (leaveParam)
      console.log('from my-leaves data : ' + JSON.stringify(leaveParam));
  }
}
