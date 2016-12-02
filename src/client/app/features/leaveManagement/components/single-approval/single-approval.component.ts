/** Angular Dependencies */
import { Router, ActivatedRoute } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';


/** Module Level Dependencies */
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave';
import { User } from '../../models/user';

/** Component Declaration */

class FormFieldClass {
    constructor(
        public comments: string
    ) { }
}

@BaseComponent({
    moduleId: module.id,
    selector: 'singleapproval',
    templateUrl: 'single-approval.component.html',
    styleUrls: ['single-approval.component.css']
})
export class SingleApprovalComponent {
    leaveID: number;
    leaveObs: Observable<Leave>;
    userDetObs: Observable<User>;
    requests: any;
    servRows = 6;
    model: FormFieldClass;
    validationMessage: string = '';
    approved: boolean = false;
    rejected: boolean = false;
    msgs: Message[] = [];

    constructor(
        private router: Router,
        private store: Store<any>,
        private logService: LogService,
        private leaveService: LeaveService,
        private route: ActivatedRoute
    ) {
        this.model = new FormFieldClass('');

    }

    ngOnInit() {
        this.logService.debug('Single leave approval Comonent');
        this.route.params.subscribe(params => {
            this.leaveID = +params['id'];
        });
        this.leaveObs = this.leaveService.getLeave(this.leaveID);
    }

    approveClicked() {
        this.rejected = false;
        this.approved = true;
        //    BACKEND CALL HERE

        var params = [{
            ID: this.leaveID,
            Comment: this.model.comments.trim(),
            Status: 'Approved'
        }];

        this.leaveService.updateLeaveRecord(this.leaveID, params)
            .subscribe(res => {
                if (res) {
                    this.rejected = false;
                    this.approved = true;
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Leave approved!' });
                    this.closeClicked();
                } else {
                    this.rejected = true;
                    this.approved = false;
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: 'Fail', detail: 'Request not completed.' });
                }
            });
    }

    rejectClicked() {
        this.rejected = true;
        this.approved = false;
        //    BACKEND CALL HERE

        var params = [{
            ID: this.leaveID,
            Comment: this.model.comments.trim(),
            Status: 'Rejected'
        }];

        this.leaveService.updateLeaveRecord(this.leaveID, params)
            .subscribe(res => {
                if (res) {
                    this.rejected = true;
                    this.approved = false;
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Leave rejected!' });
                    this.closeClicked();
                } else {
                    this.rejected = false;
                    this.approved = true;
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: 'Fail', detail: 'Request not completed.' });
                }
            });
    }

    closeClicked() {
        this.model.comments = '';
        this.router.navigate(['/leave/approve-leave']);
    }

    submitForm(form) {
        // BACKEND CALL HERE
    }
}
