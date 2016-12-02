/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { Employee } from '../../models/employee';
import { TimesheetService } from '../../services/timesheet.service';

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'my-timesheet',
  templateUrl: 'my-timesheet.component.html'
})
export class MyTimesheetComponent implements OnInit {
  employee: Observable<any>;
  timesheets: Observable<any>;
  constructor(
    private router: Router,
    private timesheetService: TimesheetService,
    private logService: LogService
  ) {
    this.logService.debug('MyTimesheetComponent : constructor');
  }

  ngOnInit(): void {
  }

  selectEmployee(employee: Employee) {
    this.router.navigate(['/add-edit-timesheet']);
  }

}
