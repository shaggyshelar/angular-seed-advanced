/** Angular Dependencies */
import { Router, ActivatedRoute } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

/** Module Level Dependencies */
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave';

/** Component Declaration */


@BaseComponent({
    moduleId: module.id,
    selector: 'update-leave',
    templateUrl: 'update-leave.component.html',
    styleUrls: ['update-leave.component.css']
})
export class UpdateLeaveComponent {
    public leaveObs: Observable<Leave>;
    leaveID: any;
    isCancellable: boolean;
    errorMsg: string;
    today: Date;
    msgs: Message[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private logService: LogService,
        private leaveService: LeaveService
    ) {
        this.isCancellable = false;
        this.errorMsg = '';
        this.today = new Date();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.leaveID = +params['id'];
            console.log('param ID: ' + this.leaveID);
        });

        this.leaveObs = this.leaveService.getLeave(this.leaveID);
        this.leaveObs.subscribe(res => {
            if (res.StartDate >= new Date())
                this.setCancellable(true);
            else
                this.setCancellable(false);
        });
    }

    setCancellable(param) {
        debugger;
        this.isCancellable = param;
    }

    closeClicked() {
        this.router.navigate(['/leave/my-leaves']);
    }

    cancelClicked() {
        this.logService.debug(this.leaveID);
        this.leaveService.deleteLeaveRecord(this.leaveID).subscribe(res => {
            if (res) {
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Leave application deleted!' });
                this.closeClicked()
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: 'Fail', detail: 'Request not completed.' });
            }
        });
    }

}
