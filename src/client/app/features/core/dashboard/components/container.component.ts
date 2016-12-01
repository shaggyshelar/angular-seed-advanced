/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'dashboard-con',
    templateUrl: 'container.component.html'
})
export class DashboardContainerComponent implements OnInit {
    // constructor(private logService: LogService) {
    //     this.logService.debug('DashboardContainerComponent : constructor');
    // }

    ngOnInit() {
        //this.logService.debug('DashboardContainerComponent : ngOnInit');
        window['App'].init();
        window['Layout'].init();
    }
}
