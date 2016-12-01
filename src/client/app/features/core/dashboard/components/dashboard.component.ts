/** Angular Dependencies */
import { OnInit } from '@angular/core';
/** Framework Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    // constructor(private logService: LogService, public routerExt: RouterExtensions) {
    //     this.logService.debug('DashboardComponent : constructor');
    // }

    ngOnInit() {
        //this.logService.debug('DashboardComponent : ngOnInit');
    }
}
