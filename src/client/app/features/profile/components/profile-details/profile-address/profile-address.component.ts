/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { Address } from '../../../models/address';
import { AddressService } from '../../../services/address.service';
import { MessageService } from '../../../../core/shared/services/message.service';

/** Other Module Dependencies */
import * as _ from 'lodash';

export interface AddressForm {
    currentID: number;
    permanentID: number;
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

    addressList: Observable<Address>;;
    showDiv: boolean;
    addressForm: FormGroup;
    public profile_Observable: Observable<any>;
    addressArray: any;

    constructor(private formBuilder: FormBuilder, private addressService: AddressService, private messageService: MessageService) {
        this.showDiv = true;
        this.addressArray = [];
    }

    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            currentID: null,
            permanentID: null,
            currentAddress: ['', [Validators.required]],
            permanentAddress: ['', [Validators.required]]
        });

        this.addressList = this.addressService.getAddress();
        this.addressList.subscribe(result => {
            this.addressArray = result ? result : [];
        });
    }

    addClick() {
        this.showDiv = false;
        //TODO: Update Add Address Logic
        if (this.addressArray.length > 0) {
            var currentAddressIndex = _.findIndex(this.addressArray, { Type: 'Current' });
            var permanentAddressIndex = _.findIndex(this.addressArray, { Type: 'Permanent' });
            this.addressForm.setValue({
                currentID: this.addressArray[currentAddressIndex].ID,
                currentAddress: this.addressArray[currentAddressIndex].Description,
                permanentID: this.addressArray[permanentAddressIndex].ID,
                permanentAddress: this.addressArray[permanentAddressIndex].Description
            });
        }
    }

    onSubmit({ value, valid }: { value: AddressForm, valid: boolean }) {
        this.showDiv = true;
        //TODO: Update Add Address Logic
        if (value.currentID && value.permanentID) {
            let params = [{
                ID: value.currentID,
                Description: value.currentAddress
            }, {
                ID: value.permanentID,
                Description: value.permanentAddress
            }];
            this.addressService.updateAddress(value.currentID, params).subscribe(res => {
                if (res) {
                    this.addressList = this.addressService.getAddress();
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Address updated successfully.' });
                    this.showDiv = true;
                }
            });
        } else {
            let params = [{
                Type: 'Current',
                Description: value.currentAddress
            }, {
                Type: 'Permanent',
                Description: value.permanentAddress
            }];
            this.addressService.addAddress(params).subscribe(res => {
                if (res) {
                    this.addressList = this.addressService.getAddress();
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Address saved successfully.' });
                    this.showDiv = true;
                }
            });
        }
    }
    cancel() {
        this.showDiv = true;
        this.addressForm.reset();
    }
}
