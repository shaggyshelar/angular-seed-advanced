/** Angular Dependencies */
import { OnInit } from '@angular/core';
/** Framework Dependencies */
import { BaseComponent, LogService, RouterExtensions } from '../../../framework.ref';

/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private logService: LogService, public routerExt: RouterExtensions) {
        this.logService.debug('DashboardComponent : constructor');
    }

    ngOnInit() {
        this.logService.debug('DashboardComponent : ngOnInit');
    }

    readAbout() {
        // Try this in the {N} app
        // {N} can use these animation options
        this.routerExt.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    }
}
