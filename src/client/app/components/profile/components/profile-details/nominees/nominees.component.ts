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

    constructor() {
        this.nomineesData = [];
        this.showDiv = true;
    }

    submit() {
        this.nomineesData = [{
            id: 1,
            firstNomineeName:'First Name',
            secondNomineeName:'Second Name',
            firstNomineeRelationWithEmp:'Emp Rel 1',
            secondNomineeRelationWithEmp: 'Emp Rel 2',
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }

    add() {
        this.showDiv = false;
    }
}
