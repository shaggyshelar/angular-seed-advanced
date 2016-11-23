/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { Timesheet } from '../../models/timesheet';

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'report-timesheet',
  templateUrl: 'report-timesheet.component.html'
})
export class ReportTimesheetComponent implements OnInit {
  projects: SelectItem[];
  employee: SelectItem[];
  status: SelectItem[];
  timesheetReport: Timesheet[];
  constructor(private logService: LogService) {
    this.logService.debug('ReportTimesheetComponent : constructor');
  }

  ngOnInit(): void {
    this.logService.debug('ReportTimesheetComponent : ngOnInit');
    this.projects = [];
    this.projects.push({ label: 'Select City', value: null });
    this.projects.push({ label: 'project1', value: { id: 1, name: 'project1' } });
    this.projects.push({ label: 'project2', value: { id: 2, name: 'project2' } });

    this.employee = [];
    this.employee.push({ label: 'Select Employee', value: null });
    this.employee.push({ label: 'employee1', value: { id: 1, name: 'employee1' } });
    this.employee.push({ label: 'employee2', value: { id: 2, name: 'employee2' } });

    this.status = [];
    this.status.push({ label: 'Select Status', value: null });
    this.status.push({ label: 'status1', value: { id: 1, name: 'status1' } });
    this.status.push({ label: 'status2', value: { id: 2, name: 'status2' } });

    this.timesheetReport = [{
      id: 1,
      employeeName: 'abc',
      project: 'project1',
      date: '01-10-2015',
      task: 'Development',
      billableHours: 8,
      nonBillableHours: 2,
      status: 'Submitted',
      totalHours: 10
    },
    {
      id: 2,
      employeeName: 'abc',
      project: 'project1',
      date: '02-10-2015',
      task: 'Development',
      billableHours: 6,
      nonBillableHours: 2,
      status: 'Submitted',
      totalHours: 8
    }, {
      id: 3,
      employeeName: 'abc',
      project: 'project1',
      date: '03-10-2015',
      task: 'Development',
      billableHours: 8,
      nonBillableHours: 2,
      status: 'Submitted',
      totalHours: 10
    }, {
      id: 4,
      employeeName: 'abc',
      project: 'project1',
      date: '04-10-2015',
      task: 'Development',
      billableHours: 7,
      nonBillableHours: 2,
      status: 'Submitted',
      totalHours: 9
    }, {
      id: 5,
      employeeName: 'abc',
      project: 'project1',
      date: '05-10-2015',
      task: 'Development',
      billableHours: 8,
      nonBillableHours: 2,
      status: 'Submitted',
      totalHours: 10
    }, {
      id: 6,
      employeeName: 'abc',
      project: 'project1',
      date: '02-11-2015',
      task: 'Development',
      billableHours: 8,
      nonBillableHours: 0,
      status: 'Submitted',
      totalHours: 8
    },
    ];
  }
}
