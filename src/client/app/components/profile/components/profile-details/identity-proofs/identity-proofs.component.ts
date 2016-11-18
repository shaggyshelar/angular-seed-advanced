/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import {BaseComponent} from '../../views/base-component';

/** Module Level Dependencies */

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
    selectedIdentityType: number;

    constructor() {
        this.identityProofs = [];
        this.showDiv = true;
        this.showSubDiv = false;
    }

    ngOnInit(): void {
        this.identityTypes = [
            { label: 'Select', value: null },
            { label: 'Aadhaar Card ID', value: { id: 1, name: 'Aadhaar Card ID' } },
            { label: 'PAN Card', value: { id: 2, name: 'PAN Card' } },
            { label: 'Voter ID', value: { id: 3, name: 'Voter ID' } }
        ];
    }
    addClick() {
        this.showDiv = false;
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
        this.showDiv = true;
        this.showSubDiv = false;
    }
    cancel() {
        this.showSubDiv = false;
        this.selectedIdentityType = null;
    }
    cancelIdentityType() {
        this.showSubDiv = false;
        this.showDiv = true;
        this.selectedIdentityType = null;
    }
    onIdentityTypeChange(event) {
        this.showSubDiv = true;
        console.log(this.selectedIdentityType);
    }
}
