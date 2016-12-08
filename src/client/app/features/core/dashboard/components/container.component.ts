/** Angular Dependencies */
import { OnInit, Component } from '@angular/core';

import { Message } from 'primeng/primeng';
import { MessageService } from '../../shared/services/message.service';
/** Component Definition */
@Component({
    moduleId: module.id,
    selector: 'dashboard-con',
    templateUrl: 'container.component.html'
})
export class DashboardContainerComponent implements OnInit {
    msgs: Message[] = [];
    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        window['App'].init();
        window['Layout'].init();
        this.messageService.getMessages()
            .subscribe((value: Object) => {
                this.msgs = [];
                this.msgs.push(value);
            });
    }
}
