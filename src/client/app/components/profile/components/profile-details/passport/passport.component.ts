/** Angular Dependencies */

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'passport',
    templateUrl: 'passport.component.html',
    styleUrls: ['passport.component.css']
})
export class PassportComponent {

    employmentHistory: any[];
    passport: any[];
    showDiv: boolean;
    passportObj : any;

    constructor() {
        this.passport = [];
        this.showDiv = true;
        this.passportObj = {};
    }

    addClick() {
        this.showDiv = false;
        if (this.passport.length > 0) {
            this.passportObj.passportNumber = this.passport[0].passportNumber;
            this.passportObj.passportExpiryDate = this.passport[0].passportExpiryDate;
            this.passportObj.document = this.passport[0].document;
        }
    }
    submit() {
        this.passport = [{
            id: 1,
            passportNumber: '1111',
            passportExpiryDate: '12/12/2012',
            document: '',
            status: 'pending for approval',
            hrComment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }
}
