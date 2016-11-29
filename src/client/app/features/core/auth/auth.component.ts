/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../framework.ref';

import { AuthService } from './auth.service';

/** Component Definition*/
@BaseComponent({
    moduleId: module.id,
    selector: 'authenticate',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit {
    public errorMessage: string;
    private model: User;
    constructor( private _router: Router , private logService: LogService, private authService: AuthService) {
        logService.debug('AuthComponent : constructor');
         this.model = new User('', '');
    }

    ngOnInit() {
         if (localStorage.getItem('accessToken') !== null) {
            this._router.navigate(['/']);
        }
        this.logService.debug('AuthComponent : ngOnInit');
    }

    login() {
         this.authService.authenticate(this.model)
            .subscribe(
            results => {
                this.getLoggedInUserPermission();
            },
            error => {
                this.errorMessage = <any>error;
            });
    }
     getLoggedInUserPermission(): void {
        this.authService.getLoggedInUserPermission()
            .subscribe(
            results => {
                this._router.navigate(['/']);
            },
            error => this.errorMessage = <any>error);
    }

}

class User {
    constructor(
        public Password: string,
        public UserName: string
    ) { }
}
