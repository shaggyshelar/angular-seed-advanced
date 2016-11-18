/** Angular Dependencies */
import { Route } from '@angular/router';

/** Module Level Dependencies */
import { MyTimesheetComponent } from './components/my-timesheet/my-timesheet.component';
import { AddEditTimesheetComponent } from './components/add-edit-timesheet/add-edit-timesheet.component';
import { ApproveTimesheetComponent } from './components/approve-timesheet/approve-timesheet.component';
import { ApprovedTimesheetComponent } from './components/approved-timesheet/approved-timesheet.component';
import { ReportTimesheetComponent } from './components/report-timesheet/report-timesheet.component';
import { ViewApproveTimesheetComponent } from './components/approve-timesheet/view-approve-timesheet.component';

/** Route Definitions */
export const TimesheetRoutes: Route[] = [
  {
    path: 'my-timesheet',
    component: MyTimesheetComponent,
    data: {
      permissions: ['Timesheet.READ']
    }
  }, {
    path: 'add-edit-timesheet',
    component: AddEditTimesheetComponent,
    data: {
      permissions: ['Timesheet.CREATE','Timesheet.UPDATE']
    }
  }, {
    path: 'approve-timesheet',
    component: ApproveTimesheetComponent,
    data: {
      permissions: ['Timesheet.READ']
    }
  }, {
    path: 'approved-timesheet',
    component: ApprovedTimesheetComponent,
    data: {
      permissions: ['Timesheet.READ']
    }
  }, {
    path: 'report-timesheet',
    component: ReportTimesheetComponent,
    data: {
      permissions: ['Timesheet.READ']
    }
  }, {
    path: 'view-approve-timesheet',
    component: ViewApproveTimesheetComponent,
    data: {
      permissions: ['Timesheet.READ']
    }
  }
];
