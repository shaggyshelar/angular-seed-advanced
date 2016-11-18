/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

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
  templateUrl: 'lms-singleapproval.component.html',
  styleUrls: ['lms-singleapproval.component.css']
})
export class LmsSingleApprovalComponent {

  requests: any[];
  servRows = 6;

  model: FormFieldClass;

  validationMessage: string = '';
  approved: boolean = false;
  rejected: boolean = false;

  constructor() {
    this.requests = [
      { project: 'RMS', manager: 'Sagar Shelar', status: 'Pending', comments: 'Comment1 here...' },
      { project: 'PLSV 2', manager: 'Manager Name', status: 'Approved', comments: 'Comment2 here...' }
    ];
    this.model = new FormFieldClass('');

  }

  approveClicked() {
    this.rejected = false;
    this.approved = true;
    alert('approved!');
    //    BACKEND CALL HERE
    return;
  }

  rejectClicked() {
    this.rejected = true;
    this.approved = false;
    alert('rejected!');
    //    BACKEND CALL HERE
    return;
  }

  closeClicked() {
    this.model.comments = '';
  }

}
