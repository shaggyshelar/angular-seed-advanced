/** Angular Dependencies */
import { Route } from '@angular/router';

/** Module Level Dependencies */
import { MyProfileComponent } from './components/my-profile/my-profile.component';

/** Route Definitions */
export const ProfileRoutes: Route[] = [
  {
    path: '',
    component: MyProfileComponent
  }
];
