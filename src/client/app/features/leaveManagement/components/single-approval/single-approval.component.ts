/** Angular Dependencies */
import { Router, ActivatedRoute } from '@angular/router';
/** Framework Dependencies */
//import { BaseComponent } from '../views/base-component';
import { BaseComponent, LogService } from '../../../framework.ref';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from '../../services/leave.actions';

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
  reqId: number;
  leaveObs: Observable<any>;


  requests: any;
  servRows = 6;



  model: FormFieldClass;

  validationMessage: string = '';
  approved: boolean = false;
  rejected: boolean = false;

  constructor(
    private router: Router,
    private store: Store<any>,
    private logService: LogService,
    private route: ActivatedRoute
  ) {
    this.requests = [
      { project: 'RMS', manager: 'Sagar Shelar', status: 'Pending', comments: 'Comment1 here...' },
      { project: 'PLSV 2', manager: 'Manager Name', status: 'Approved', comments: 'Comment2 here...' }
    ];
    this.model = new FormFieldClass('');

  }

  ngOnInit() {
    this.logService.debug('Single leave approval Comonent');

    this.requests = this.route.params.subscribe(params => {
      this.reqId = +params['id'];
    });

    this.store.dispatch({ type: LEAVE_ACTIONS.DETAIL, payload: this.reqId });
    this.leaveObs = this.store.select('leave');
    this.leaveObs.subscribe(res => {
      this.requests = res ? res.leave : {};
      if(res)
        console.log(res.leave);
    });

  }

  approveClicked() {
    this.rejected = false;
    this.approved = true;
    //    BACKEND CALL HERE
    return;
  }

  rejectClicked() {
    this.rejected = true;
    this.approved = false;
    //    BACKEND CALL HERE
    return;
  }

  closeClicked() {
    this.model.comments = '';
    this.router.navigate(['/leave/approve-leave']);
  }

  submitForm(form) {
    // BACKEND CALL HERE
  }
}
