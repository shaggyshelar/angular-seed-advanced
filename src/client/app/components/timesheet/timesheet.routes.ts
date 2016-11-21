/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Module Level Dependencies */
import { MyTimesheetComponent } from './components/my-timesheet/my-timesheet.component';
import { AddEditTimesheetComponent } from './components/add-edit-timesheet/add-edit-timesheet.component';
import { ApproveTimesheetComponent } from './components/approve-timesheet/approve-timesheet.component';
import { ApprovedTimesheetComponent } from './components/approved-timesheet/approved-timesheet.component';
import { ReportTimesheetComponent } from './components/report-timesheet/report-timesheet.component';
import { ViewApproveTimesheetComponent } from './components/approve-timesheet/view-approve-timesheet.component';

const TimesheetRoutes: Routes = [
  {
    path: 'timesheet',
    children: [
      {
        path: 'my',
        component: MyTimesheetComponent,
        data: {
          permissions: ['Timesheet.READ']
        }
      },
      {
        path: 'add-edit',
        component: AddEditTimesheetComponent,
        data: {
          permissions: ['Timesheet.CREATE', 'Timesheet.UPDATE']
        }
      }, {
        path: 'approve',
        component: ApproveTimesheetComponent,
        data: {
          permissions: ['Timesheet.READ']
        }
      }, {
        path: 'approved',
        component: ApprovedTimesheetComponent,
        data: {
          permissions: ['Timesheet.READ']
        }
      }, {
        path: 'report',
        component: ReportTimesheetComponent,
        data: {
          permissions: ['Timesheet.READ']
        }
      }, {
        path: 'view-approve',
        component: ViewApproveTimesheetComponent,
        data: {
          permissions: ['Timesheet.READ']
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TimesheetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TimesheetRoutingModule { }
