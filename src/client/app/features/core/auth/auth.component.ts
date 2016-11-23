/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../framework.ref';

/** Component Definition*/
@BaseComponent({
    moduleId: module.id,
    selector: 'authenticate',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private logService: LogService) {
        logService.debug('AuthComponent : constructor');
    }

    ngOnInit() {
        this.logService.debug('AuthComponent : ngOnInit');
    }
}
