import {Component,  trigger, transition, style, animate, state} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../shared/services/login.service';
declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class SidebarComponent  {
  isUserMenuOpen: boolean;
  constructor(private loginService: LoginService, private _router: Router) {
    this.isUserMenuOpen = false;
  }
  logout() {
    this.loginService.logout();
    this.isUserMenuOpen = false;
    this._router.navigate(['/login']);
  }
  toggleUserMenu() {
    if(this.isUserMenuOpen) {
      $('.user-menu').slideUp();
    }else {
       $('.user-menu').slideDown();
    }
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
}
