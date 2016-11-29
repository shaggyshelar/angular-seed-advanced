/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from '../../../services/profile.actions';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'nominees',
    templateUrl: 'nominees.component.html',
    styleUrls: ['nominees.component.css']
})
export class NomineesComponent implements OnInit {
    nomineesData: any[];
    showDiv: boolean;
    nomineeObj: any;
    public profile_Observable: Observable<any>;

    constructor(private store: Store<any>) {
        this.nomineesData = [];
        this.showDiv = true;
        this.nomineeObj = {};
    }
    ngOnInit(): void {
        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_NOMINEES, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.nomineesData = res && res.nominees ? res.nominees : [];
            console.log('Nominees', this.nomineesData);
        });
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
