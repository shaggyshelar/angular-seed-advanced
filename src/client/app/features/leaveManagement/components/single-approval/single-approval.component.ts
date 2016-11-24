/** Angular Dependencies */
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */

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

  requests: any[];
  servRows = 6;

  model: FormFieldClass;

  validationMessage: string = '';
  approved: boolean = false;
  rejected: boolean = false;

  constructor(
    private router: Router
  ) {
    this.requests = [
      { project: 'RMS', manager: 'Sagar Shelar', status: 'Pending', comments: 'Comment1 here...' },
      { project: 'PLSV 2', manager: 'Manager Name', status: 'Approved', comments: 'Comment2 here...' }
    ];
    this.model = new FormFieldClass('');

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
    this.router.navigate(['/leave-management/approve-leave']);
  }

  submitForm(form: NgForm) {
    // BACKEND CALL HERE
  }
}
