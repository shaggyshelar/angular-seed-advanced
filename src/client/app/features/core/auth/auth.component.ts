/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../framework.ref';

import { AuthService } from './auth.service';

/** Component Definition*/
@BaseComponent({
    moduleId: module.id,
    selector: 'authenticate',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private logService: LogService, private authService: AuthService) {
        logService.debug('AuthComponent : constructor');
    }

    ngOnInit() {
        this.logService.debug('AuthComponent : ngOnInit');
    }

    login() {
        if (this.authService.authenticate('', '')) {
            console.log('Auth Successful');
            //Perform Post authentication cleanup tasks
        };
    }

}
