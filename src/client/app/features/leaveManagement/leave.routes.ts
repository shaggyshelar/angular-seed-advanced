/** Angular Depedencies */
import { Route } from '@angular/router';

/** Module Level Depedencies */
import { HolidaysComponent } from './components/holidays/holidays.component';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './components/approve-leave/approve-leave.component';
import { UpdateLeaveComponent } from './components/update-leave/update-leave.component';
import { BulkApproveComponent } from './components/bulk-approval/bulk-approval.component';
import { SingleApprovalComponent } from './components/single-approval/single-approval.component';
import { AuthGuard } from '../core/index';

export const LeaveRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'holidays',
    pathMatch: 'full'
  },
  {
    path: 'holidays',
    component: HolidaysComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['HOLIDAY.READ']
    }
  },
  {
    path: 'my-leaves',
    component: MyLeavesComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['LEAVE.READ']
    }
  },
  {
    path: 'apply-leave',
    component: ApplyLeaveComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['LEAVE.CREATE']
    }
  },
  {
    path: 'approve-leave',
    component: ApproveLeaveComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['LEAVE.UPDATE', 'LEAVE.READ']
    }
  },
  {
    path: 'bulk-approval',
    component: BulkApproveComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['LEAVE.UPDATE', 'LEAVE.READ']
    }
  },
  {
    path: 'update-leave/:id',
    component: UpdateLeaveComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['LEAVE.UPDATE', 'LEAVE.READ']
    }
  },
  {
    path: 'single-approval/:id',
    component: SingleApprovalComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: ['LEAVE.UPDATE', 'LEAVE.READ']
    }
  }
];
