/** Angular Dependencies */
import { NgModule } from '@angular/core';
//import { RouterModule  } from '@angular/router';

/** Third Party Dependencies */
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer } from '@ngrx/store';

/** Module Level Dependencies */
// Components Declarations
import { CommonModule, TranslateModule } from '../core/index';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './components/approve-leave/approve-leave.component';
import { BulkApproveComponent } from './components/bulk-approval/bulk-approval.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { SingleApprovalComponent } from './components/single-approval/single-approval.component';
import { UpdateLeaveComponent } from './components/update-leave/update-leave.component';

// Service Declarations
import { LeaveService } from './services/leave.service';
import { LeaveEffects } from './services/leave.effects';
import { leaveReducer } from './services/leave.reducer';

/** Module Definition */
@NgModule({
    imports: [ 
        CommonModule,
        TranslateModule,
        EffectsModule.run(LeaveEffects)
     ],
    exports: [  ],
    declarations: [ 
        ApplyLeaveComponent,
        ApproveLeaveComponent,
        BulkApproveComponent,
        HolidaysComponent,
        MyLeavesComponent,
        SingleApprovalComponent,
        UpdateLeaveComponent        
     ],
    providers: [ LeaveService ],
})

export class LeaveModule {
    static reducers(): { [key: string]: ActionReducer<any> } {
        return { leave: leaveReducer };
    }
}
