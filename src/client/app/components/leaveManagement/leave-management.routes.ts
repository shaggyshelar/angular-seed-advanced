import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './components/approve-leave/approve-leave.component';
import { UpdateLeaveComponent } from './components/update-leave/update-leave.component';
import { BulkApproveComponent } from './components/bulk-approval/bulk-approval.component';
import { SingleApprovalComponent } from './components/single-approval/single-approval.component';

const LeaveManagementRoutes: Routes = [
  {
    path: 'leave-management',
    children: [
      {
        path: 'holidays',
        component: HolidaysComponent,
        data: {
          permissions: ['Holiday.READ']
        }
      },
      {
        path: 'my-leaves',
        component: MyLeavesComponent,
        data: {
          permissions: ['Leave.READ']
        }
      },
      {
        path: 'apply-leave',
        component: ApplyLeaveComponent,
        data: {
          permissions: ['Leave.CREATE']
        }
      },
      {
        path: 'approve-leave',
        component: ApproveLeaveComponent,
        data: {
          permissions: ['LeaveApproval.READ']
        }
      },
      {
        path: 'bulk-approval',
        component: BulkApproveComponent,
        data: {
          permissions: ['LeaveApproval.READ']
        }
      },
      {
        path: 'update-leave',
        component: UpdateLeaveComponent,
        data: {
          permissions: ['LeaveApproval.UPDATE']
        }
      },
      {
        path: 'single-approval',
        component: SingleApprovalComponent,
        data: {
          permissions: ['LeaveApproval.UPDATE']
        }
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(LeaveManagementRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LeaveManagementRoutingModule {  }
