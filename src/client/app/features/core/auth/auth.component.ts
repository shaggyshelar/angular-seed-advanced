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
    showError: boolean = false;
    private model: User;
    constructor(private _router: Router, private logService: LogService, private authService: AuthService) {
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
        this.showError = false;
        this.authService.authenticate(this.model)
            .subscribe(
            results => {
                this.getLoggedInUserPermission();
            },
            error => {
                this.showError = true;
                this.errorMessage = error.message;
            });
    }
    getLoggedInUserPermission(): void {
        this.authService.getLoggedInUserPermission()
            .subscribe(
            results => {
                this._router.navigate(['/']);
            },
            error => {
                this.showError = true;
                this.errorMessage = error.message;
            });
    }

}

class User {
    constructor(
        public Password: string,
        public UserName: string
    ) { }
}
