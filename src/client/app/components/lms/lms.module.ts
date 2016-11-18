/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule  } from '@angular/router';

/** Other Module Dependencies */
import { CommonModule, TranslateModule } from '../../shared/index';

/** Module level Dependencies */
import { LmsApplyLeavesComponent } from './components/lms-applyleave/lms-applyleave.component';
import { LmsApproveLeavesComponent } from './components/lms-approveleave/lms-approveleave.component';
import { LmsBulkApproveComponent } from './components/lms-bulkapproval/lms-bulkapproval.component';
import { LmsHolidaysComponent } from './components/lms-holidays/lms-holidays.component';
import { LmsLeavesComponent } from './components/lms-myleaves/lms-leaves.component';
import { LmsSingleApprovalComponent } from './components/lms-singleapproval/lms-singleapproval.component';
import { LmsUpdateLeavesComponent } from './components/lms-updateleave/lms-updateleave.component';

/** Module Import Declarations */
let imports = [FormsModule,CommonModule, TranslateModule, BrowserModule, RouterModule];

/** Component/Directive Declarations */
let declarations = [
    LmsApplyLeavesComponent,
    LmsApproveLeavesComponent,
    LmsBulkApproveComponent,
    LmsHolidaysComponent,
    LmsLeavesComponent,
    LmsSingleApprovalComponent,
    LmsUpdateLeavesComponent
];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class LmsModule { }
