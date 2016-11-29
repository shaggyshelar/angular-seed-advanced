/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from '../../../services/profile.actions';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';


/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'identity-proofs',
    templateUrl: 'identity-proofs.component.html',
    styleUrls: ['identity-proofs.component.css']
})
export class IdentityProofsComponent implements OnInit {

    employmentHistory: any[];
    identityProofs: any[];
    identityTypes: SelectItem[];
    showDiv: boolean;
    showSubDiv: boolean;
    selectedIdentityType: any;
    identity: any;
    public profile_Observable: Observable<any>;

    constructor(private store: Store<any>) {
        this.identityProofs = [];
        this.showDiv = false;
        this.showSubDiv = false;
        this.identity = {};
        this.selectedIdentityType = {};
    }

    ngOnInit(): void {
        this.identityTypes = [
            { label: 'Select', value: null },
            { label: 'Aadhaar Card ID', value: { id: 1, name: 'Aadhaar Card ID' } },
            { label: 'PAN Card', value: { id: 2, name: 'PAN Card' } },
            { label: 'Voter ID', value: { id: 3, name: 'Voter ID' } }
        ];
        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_IDENTITY_PROOF, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.identityProofs = res && res.identityProofs ? res.identityProofs : [];
            console.log('IdentityProofs', this.identityProofs);
        });
    }
    addClick() {
        this.showDiv = true;
    }
    submit() {
        this.identityProofs = [{
            id: 1,
            identityType: 'AdharCard',
            value: '1234',
            document: '',
            status: 'pending for approval',
            hrComment: ''
        }];
        this.showDiv = false;
        this.showSubDiv = false;
    }
    cancel() {
        this.showSubDiv = false;
        this.selectedIdentityType = {};
    }
    cancelIdentityType() {
        this.showSubDiv = false;
        this.showDiv = false;
        this.selectedIdentityType = {};
    }
    onIdentityTypeChange(event) {
        this.showSubDiv = true;
    }

    editIdentityProof(identity) {
        this.showDiv = false;
        this.showSubDiv = true;
        this.selectedIdentityType = this.identityTypes[1].value;
        this.identity.value = this.identity.value;
        this.identity.document = this.identity.document;
    }
}
