/** Angular Dependencies */
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'update-leave',
  templateUrl: 'update-leave.component.html'
})
export class UpdateLeaveComponent {
  public leaveObs: Observable<any>;
  leave: any;
  managers: any[];
  leaveId: any;
  sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>,
    private logService: LogService
  ) {
    this.leave = {};
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.leaveId = +params['id'];
      console.log('param ID: ' +this.leaveId);});

      this.store.dispatch({ type: LEAVE_ACTIONS.DETAIL, payload: this.leaveId });
      this.leaveObs = this.store.select('leave');
      this.leaveObs.subscribe(res =>
        this.leave = res ? res.leaves : {}
      );

      // this.leaves = [
      //   { leave: { id: 0, name: 'Select' }, numDays: 1, reason: 'Personal', start: '22-09-2016', end: '22-09-2016', action: '' },
      //   { leave: { id: 0, name: 'Select' }, numDays: 1, reason: 'Personal', start: '23-09-2016', end: '23-09-2016', action: '' },
      // ];

      // this.managers = [
      //   { project: 'HR', manager: 'Pooja Merchant', status: 'Approved', comments: 'Approved' },
      //   { project: 'RMS', manager: 'Sagar Shelar', status: 'Approved', comments: 'Approved' },
      // ];
    }

  closeClicked() {
        this.router.navigate(['/leave/my-leaves']);
      }

}
