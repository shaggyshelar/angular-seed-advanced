/** Angular Dependencies */
import { Router } from '@angular/router';
/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */


@BaseComponent({
  moduleId: module.id,
  selector: 'leaves',
  templateUrl: 'my-leaves.component.html'
})
export class MyLeavesComponent {

  servRows = 5;
  leaves: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.leaves = [
      { empName: 'Person1 LName', start: '22-09-2016', end: '23-09-2016', numDays: 2, status: 'Approved' },
      { empName: 'Person1 LName', start: '22-08-2016', end: '22-08-2016', numDays: 1, status: 'Approved' },
      { empName: 'Person1 LName', start: '02-10-2016', end: '03-10-2016', numDays: 2, status: 'Approved' }
    ];
  }

  applyLeaveClicked() {
    this.router.navigate(['/leave/apply-leave']);
  }

  updateBtnClicked() {
    this.router.navigate(['/leave/update-leave']);
  }
}
