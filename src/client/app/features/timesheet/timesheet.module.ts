/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Module Level Dependencies */
// Components Declarations
import { CommonModule } from '../core/index';
import { MyTimesheetComponent } from './components/my-timesheet/my-timesheet.component';
import { AddEditTimesheetComponent } from './components/add-edit-timesheet/add-edit-timesheet.component';
import { ApproveTimesheetComponent } from './components/approve-timesheet/approve-timesheet.component';
import { ApprovedTimesheetComponent } from './components/approved-timesheet/approved-timesheet.component';
import { ReportTimesheetComponent } from './components/report-timesheet/report-timesheet.component';
// Services Delarations
import { TimesheetService } from './services/timesheet.service';
import { TimesheetRoutingModule } from './timesheet-routes.module';
import { RouterModule } from '@angular/router';

/** Module Definition */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TimesheetRoutingModule
    ],
    exports: [],
    declarations: [
        MyTimesheetComponent,
        AddEditTimesheetComponent,
        ApproveTimesheetComponent,
        ApprovedTimesheetComponent,
        ReportTimesheetComponent],
    providers: [TimesheetService],
})
export class TimesheetModule {
}
