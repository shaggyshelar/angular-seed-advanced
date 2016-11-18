/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Other Module Dependencies */
import {CommonModule, TranslateModule} from '../../shared/index';

/** Module level Dependencies */
import { MyTimesheetComponent } from './components/my-timesheet/my-timesheet.component';
import { AddEditTimesheetComponent } from './components/add-edit-timesheet/add-edit-timesheet.component';
import { ApproveTimesheetComponent } from './components/approve-timesheet/approve-timesheet.component';
import { ViewApproveTimesheetComponent } from './components/approve-timesheet/view-approve-timesheet.component';
import { ApprovedTimesheetComponent } from './components/approved-timesheet/approved-timesheet.component';
import { ReportTimesheetComponent } from './components/report-timesheet/report-timesheet.component';

/** Module Import Declarations */
let imports = [CommonModule, TranslateModule];

/** Component/Directive Declarations */
let declarations = [MyTimesheetComponent,
    AddEditTimesheetComponent,
    ApproveTimesheetComponent,
    ViewApproveTimesheetComponent,
    ApprovedTimesheetComponent,
    ReportTimesheetComponent,
    ];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class TimesheetModule { }
