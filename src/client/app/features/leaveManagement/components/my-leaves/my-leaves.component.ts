/** Angular Dependencies */
import { Router } from '@angular/router';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { Leave } from '../../models/leave';
import { LEAVE_MANAGEMENT_ACTIONS } from '../../services/leave-management.actions';

/** Component Declaration */


@BaseComponent({
  moduleId: module.id,
  selector: 'leaves',
  templateUrl: 'my-leaves.component.html'
})
export class MyLeavesComponent {

  servRows = 5;
  public leaves$: Observable<any>;
  public leaves : any;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService
  ) { 
    this.logService.debug('MyLeavesComponent : constructor');
  
  }

  ngOnInit() {
    this.store.dispatch({ type: LEAVE_MANAGEMENT_ACTIONS.INIT });
    this.leaves$ = this.store.select('leaves');
    this.leaves$.subscribe(res =>
      this.leaves = res ? res.leaves : {}
    );
    this.logService.debug('MyLeavesComponent : ngOnInit');
  }

  applyLeaveClicked() {
    this.router.navigate(['/leave-management/apply-leave']);
  }

  updateBtnClicked() {
    this.router.navigate(['/leave-management/update-leave']);
  }
}
