/** Angular Dependencies */
import { Router } from '@angular/router';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { Employee } from '../../models/employee';
import { LEAVE_MANAGEMENT_ACTIONS } from '../../services/leave-management.actions';

/** Component Declaration */


@BaseComponent({
  moduleId: module.id,
  selector: 'update-leave',
  templateUrl: 'update-leave.component.html'
})
export class UpdateLeaveComponent {

  leaves: any;
  public leaves$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService
  ) { 
    this.logService.debug('Update Leave constructor');
   }
  ngOnInit() {
    this.store.dispatch({ type: LEAVE_MANAGEMENT_ACTIONS.DETAILS });
    this.leaves$ = this.store.select('leaves');
    this.leaves$.subscribe(res =>
      this.leaves = res ? res.leaves : []
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
    this.router.navigate(['/leave-management/my-leaves']);
  }

}
