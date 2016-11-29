/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../../framework.ref';
import { LoginService } from '../../../shared/services/login.service';
declare var $: any;

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'sidebar-menu',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isUserMenuOpen: boolean;
  constructor(private loginService: LoginService, private router: Router, private logService: LogService) {
    this.logService.debug('SidebarComponent : constructor');
    this.isUserMenuOpen = false;
  }

  logout() {
    this.loginService.logout();
    this.isUserMenuOpen = false;
    this.router.navigate(['/login']);
  }

  toggleUserMenu() {
    if (this.isUserMenuOpen) {
      $('.user-menu').slideUp();
    } else {
      $('.user-menu').slideDown();
    }
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  ngOnInit(): void {
    this.logService.debug('SidebarComponent : ngOnInit');
  }
}
