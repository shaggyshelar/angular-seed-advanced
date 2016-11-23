/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'add-edit-timesheet',
  templateUrl: 'add-edit-timesheet.component.html'
})
export class AddEditTimesheetComponent implements OnInit {
  constructor(private logService: LogService) {
    this.logService.debug('AddEditTimesheetComponent : constructor');
  }
  ngOnInit() {
    this.logService.debug('AddEditTimesheetComponent : ngOnInit');
  }
}
