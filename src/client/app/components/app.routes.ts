// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { LoginRoutes } from './login/login.routes';
import { LeaveManagementRoutes } from './leaveManagement/leave-management.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LoginRoutes,
  ...LeaveManagementRoutes,
];
