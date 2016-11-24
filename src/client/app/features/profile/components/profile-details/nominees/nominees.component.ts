/** Angular Dependencies */

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'nominees',
    templateUrl: 'nominees.component.html',
    styleUrls: ['nominees.component.css']
})
export class NomineesComponent {
    nomineesData: any[];
    showDiv: boolean;
    nomineeObj: any;

    constructor() {
        this.nomineesData = [];
        this.showDiv = true;
        this.nomineeObj = {};
    }

    submit() {
        this.nomineesData = [{
            id: 1,
            firstNomineeName: 'First Name',
            secondNomineeName: 'Second Name',
            firstNomineeRelationWithEmp: 'Emp Rel 1',
            secondNomineeRelationWithEmp: 'Emp Rel 2',
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }

    add() {
        this.showDiv = false;
        if (this.nomineesData.length > 0) {
            this.nomineeObj.firstNomineeName = this.nomineesData[0].firstNomineeName;
            this.nomineeObj.firstNomineeRelationWithEmp = this.nomineesData[0].firstNomineeRelationWithEmp;
            this.nomineeObj.secondNomineeName = this.nomineesData[0].secondNomineeName;
            this.nomineeObj.secondNomineeRelationWithEmp = this.nomineesData[0].secondNomineeRelationWithEmp;
            this.nomineeObj.nomineesInfo = true;
        }
    }
}
