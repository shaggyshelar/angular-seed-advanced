/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';
import { Message } from 'primeng/primeng';
import { MessageService } from '../../shared/services/message.service';
/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'dashboard-con',
    templateUrl: 'container.component.html'
})
export class DashboardContainerComponent implements OnInit {
    msgs: Message[] = [];
    constructor(private messageService: MessageService, private logService: LogService) {
        this.logService.debug('DashboardContainerComponent : constructor');
    }

    ngOnInit() {
        this.logService.debug('DashboardContainerComponent : ngOnInit');
        window['App'].init();
        window['Layout'].init();
        this.messageService.getMessages()
            .subscribe((value: Object) => {
                this.msgs = [];
                this.msgs.push(value);
            });
    }
}
