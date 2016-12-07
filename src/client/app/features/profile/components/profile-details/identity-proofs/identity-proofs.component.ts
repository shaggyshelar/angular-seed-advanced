/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { IdentityProofService } from '../../../services/identityProof.service';
import { IdentityProof } from '../../../models/identityProof';
import { MessageService } from '../../../../core/shared/services/message.service';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';
import * as _ from 'lodash';

export interface NomineeForm {
    id: number;
    value: string;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'identity-proofs',
    templateUrl: 'identity-proofs.component.html',
    styleUrls: ['identity-proofs.component.css']
})
export class IdentityProofsComponent implements OnInit {

    identityProofs: Observable<IdentityProof>;
    identityTypes: SelectItem[];
    showDiv: boolean;
    showSubDiv: boolean;
    selectedIdentityType: any;
    public profile_Observable: Observable<any>;
    identityProofForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private identityProofService: IdentityProofService, private messageService: MessageService) {
        this.showDiv = false;
        this.showSubDiv = false;
        this.selectedIdentityType = {};
    }

    ngOnInit(): void {
        this.identityTypes = [
            { label: 'Select', value: null },
            { label: 'Aadhaar Card ID', value: { id: 1, name: 'Aadhaar Card ID' } },
            { label: 'PAN Card', value: { id: 2, name: 'PAN Card' } },
            { label: 'Voter ID', value: { id: 3, name: 'Voter ID' } }
        ];

        this.identityProofForm = this.formBuilder.group({
            id: null,
            value: ['', [Validators.required]]
        });

        this.identityProofs = this.identityProofService.getIdentityProof();

    }
    addClick() {
        this.showDiv = true;
        this.selectedIdentityType = {};
        this.identityProofForm.reset();
    }

    onSubmit({ value, valid }: { value: NomineeForm, valid: boolean }) {

        if (value.id) {
            let params = {
                ID: value.id,
                Type: this.selectedIdentityType.name,
                Value: value.value,
            };
            this.identityProofService.updateIdentityProof(value.id, params).subscribe(res => {
                if (res) {
                    this.identityProofs = this.identityProofService.getIdentityProof();
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Identity Proof updated successfully.' });
                    this.showDiv = false;
                    this.showSubDiv = false;
                }
            });
        } else {
            let params = {
                Type: this.selectedIdentityType.name,
                Value: value.value,
            };
            this.identityProofService.addIdentityProof(params).subscribe(res => {
                if (res) {
                    this.identityProofs = this.identityProofService.getIdentityProof();
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Identity Proof saved successfully.' });
                    this.showDiv = false;
                    this.showSubDiv = false;
                }
            });
        }
    }
    cancel() {
        this.showSubDiv = false;
        this.selectedIdentityType = {};
        this.identityProofForm.reset();
    }
    cancelIdentityType() {
        this.showSubDiv = false;
        this.showDiv = false;
        this.selectedIdentityType = {};
        this.identityProofForm.reset();
    }
    onIdentityTypeChange(event) {
        this.showSubDiv = true;
    }

    editIdentityProof(identity) {
        this.showDiv = false;
        this.showSubDiv = true;
        var typeIndex = _.findIndex(this.identityTypes, { label: identity.Type.Name });
        this.selectedIdentityType = this.identityTypes[typeIndex].value;
        this.identityProofForm.setValue({
            id: identity.ID,
            value: identity.Value
        })
    }
}
