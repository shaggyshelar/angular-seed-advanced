/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */

/** Other Module Dependencies */
import * as _ from 'lodash';

export interface AddressForm {
    currentAddress: string;
    permanentAddress: string;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'profile-address',
    templateUrl: 'profile-address.component.html',
    styleUrls: ['profile-address.component.css']
})
export class ProfileAddressComponent implements OnInit {

    employmentHistory: any[];
    addressList: any[];
    showDiv: boolean;
    address: any;
    addressForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.addressList = [];
        this.showDiv = true;
        this.address = {};
    }

    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            currentAddress: ['', [Validators.required]],
            permanentAddress: ['', [Validators.required]]
        });
    }

    addClick() {
        this.showDiv = false;
        if (this.addressList.length > 0) {
            var currentAddress = _.find(this.addressList, ['type', 'current']);
            var permanentAddress = _.find(this.addressList, ['type', 'permanent']);
            this.addressForm.setValue({
                currentAddress: currentAddress ? currentAddress.address : '',
                permanentAddress: permanentAddress ? permanentAddress.address : ''
            });
        }
    }

    onSubmit({ value, valid }: { value: AddressForm, valid: boolean }) {
        this.showDiv = true;
        this.addressList = [{
            id: 1,
            type: 'current',
            address: value.currentAddress,
            document: '',
            status: 'pending for approval',
            hrComment: ''
        }, {
            id: 2,
            type: 'permanent',
            address: value.permanentAddress,
            document: '',
            status: 'pending for approval',
            hrComment: ''
        }];
    }
    cancel() {
        this.showDiv = true;
        this.addressForm.reset();
    }
}
