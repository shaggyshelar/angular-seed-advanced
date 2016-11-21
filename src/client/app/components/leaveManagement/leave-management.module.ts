/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { RouterModule  } from '@angular/router';

/** Other Module Dependencies */
import { CommonModule, TranslateModule } from '../../shared/index';

/** Module level Dependencies */
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './components/approve-leave/approve-leave.component';
import { BulkApproveComponent } from './components/bulk-approval/bulk-approval.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { SingleApprovalComponent } from './components/single-approval/single-approval.component';
import { UpdateLeaveComponent } from './components/update-leave/update-leave.component';

/** Module Import Declarations */
let imports = [FormsModule,CommonModule, TranslateModule, BrowserModule];

/** Component/Directive Declarations */
let declarations = [
    ApplyLeaveComponent,
    ApproveLeaveComponent,
    BulkApproveComponent,
    HolidaysComponent,
    MyLeavesComponent,
    SingleApprovalComponent,
    UpdateLeaveComponent
];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class LeaveManagementModule { }
