/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';
import { AuthService } from '../../../auth/auth.service';

@BaseComponent({
  moduleId: module.id,
  selector: 'top-navigation-bar',
  templateUrl: 'top-navigation-bar.component.html',
  styleUrls: ['top-navigation-bar.component.css'],
})
export class TopNavigationBarComponent implements OnInit {

  // constructor(private authService: AuthService, private router: Router) {
  //   //this.logService.debug('TopNavigationBarComponent : constructor');
  // }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

  ngOnInit(): void {
    //this.logService.debug('TopNavigationBarComponent : ngOnInit');
  }
}
