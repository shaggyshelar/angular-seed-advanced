/** Angular Dependencies */
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */

/** Component Declaration */


@BaseComponent({
  moduleId: module.id,
  selector: 'update-leave',
  templateUrl: 'update-leave.component.html'
})
export class UpdateLeaveComponent {

  leaves: any[] = [];
  managers: any[];

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.leaves = [
      { leave: { id: 0, name: 'Select' }, numDays: 1, reason: 'Personal', start: '22-09-2016', end: '22-09-2016', action: '' },
      { leave: { id: 0, name: 'Select' }, numDays: 1, reason: 'Personal', start: '23-09-2016', end: '23-09-2016', action: '' },
    ];

    this.managers = [
      { project: 'HR', manager: 'Pooja Merchant', status: 'Approved', comments: 'Approved' },
      { project: 'RMS', manager: 'Sagar Shelar', status: 'Approved', comments: 'Approved' },
    ];
  }

  closeClicked() {
    this.router.navigate(['/leave-management/my-leaves']);
  }

}
