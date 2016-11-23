/** Angular Dependencies */
import { OnInit } from '@angular/core';
/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private logService: LogService) {
        this.logService.debug('DashboardComponent : constructor');
    }

    ngOnInit() {
        this.logService.debug('DashboardComponent : ngOnInit');
    }
}
