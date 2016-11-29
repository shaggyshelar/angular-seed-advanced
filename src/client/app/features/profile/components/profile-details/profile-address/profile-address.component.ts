/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from '../../../services/profile.actions';

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

    addressList: any[];
    showDiv: boolean;
    address: any;
    addressForm: FormGroup;
    public profile_Observable: Observable<any>;

    constructor(private formBuilder: FormBuilder, private store: Store<any>) {
        this.addressList = [];
        this.showDiv = true;
        this.address = {};
    }

    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            currentAddress: ['', [Validators.required]],
            permanentAddress: ['', [Validators.required]]
        });

        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_ADDRESS, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.addressList = res && res.address ? res.address : [];
            console.log('Address', this.addressList);
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
