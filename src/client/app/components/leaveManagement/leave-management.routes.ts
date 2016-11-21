import { Route } from '@angular/router';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './components/approve-leave/approve-leave.component';
import { UpdateLeaveComponent } from './components/update-leave/update-leave.component';
import { BulkApproveComponent } from './components/bulk-approval/bulk-approval.component';
import { SingleApprovalComponent } from './components/single-approval/single-approval.component';

export const LeaveManagementRoutes: Route[] = [
  {
    path: '',
    component: HolidaysComponent
  },
  {
    path: 'holidays',
    component: HolidaysComponent
  },
  {
    path: 'my-leaves',
    component: MyLeavesComponent
  },
  {
    path: 'apply-leave',
    component: ApplyLeaveComponent
  },
  {
    path: 'approve-leave',
    component: ApproveLeaveComponent
  },
  {
    path: 'bulk-approval',
    component: BulkApproveComponent
  },
  {
    path: 'update-leave',
    component: UpdateLeaveComponent
  },
  {
    path: 'single-approval',
    component: SingleApprovalComponent
  }
];
