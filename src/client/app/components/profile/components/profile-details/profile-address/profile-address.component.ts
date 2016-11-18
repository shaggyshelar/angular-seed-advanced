/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../../views/base-component';

/** Module Level Dependencies */


/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'profile-address',
    templateUrl: 'profile-address.component.html',
    styleUrls: ['profile-address.component.css']
})
export class ProfileAddressComponent {

    employmentHistory: any[];
    addressList: any[];
    showDiv: boolean;

    constructor() {
        this.addressList = [];
        this.showDiv = true;
    }

    addClick() {
        this.showDiv = false;
    }
    submit() {
        this.addressList = [{
            id: 1,
            type: 'current',
            address: 'address1',
            document: '',
            status: 'pending for approval',
            hrComment: ''
        }, {
                id: 1,
                type: 'permanent',
                address: 'address2',
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
