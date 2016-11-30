/** Angular  Dependencies */
import { OnInit } from '@angular/core';
/** Framework Dependencies */
import { BaseComponent, LogService } from './framework.ref';

/**Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'feature',
    template: 'Hello<router-outlet></router-outlet>'
})
export class FeaturesComponent implements OnInit {
    // constructor(private logService: LogService) {
    //     logService.debug('FeaturesComponent : constructor');
    // }

    ngOnInit() {
        //this.logService.debug('FeaturesComponent: ngOnInit method');
    }
}
