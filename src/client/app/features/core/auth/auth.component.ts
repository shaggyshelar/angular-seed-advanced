/** Angular Dependencies */
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Component Definition*/
@Component({
    moduleId: module.id,
    selector: 'linkup-authenticate',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit {
    public errorMessage: string;
    showError: boolean = false;
    private model: User;
    constructor(private _router: Router, private authService: AuthService) {
        this.model = new User('', '');
    }

    ngOnInit() {
        if (localStorage.getItem('accessToken') !== null) {
            this._router.navigate(['/']);
        }
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
