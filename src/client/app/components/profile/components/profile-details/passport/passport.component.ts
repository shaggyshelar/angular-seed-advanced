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

    constructor() {
        this.passport = [];
        this.showDiv = true;
    }

    addClick() {
        this.showDiv = false;
    }
    submit() {
        this.passport = [{
            id: 1,
            passportNumber: '1111',
            passportExpiryDate: '02/02/2020',
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
