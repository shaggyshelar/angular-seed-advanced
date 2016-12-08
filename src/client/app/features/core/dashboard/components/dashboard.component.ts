/** Angular Dependencies */
import { Component } from '@angular/core';
/** Framework Dependencies */
import {RouterExtensions } from '../../../framework.ref';

/** Component Definition */
@Component({
    moduleId: module.id,
    selector: 'linkup-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
    constructor(public routerExt: RouterExtensions) {
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
