/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../../views/base-component';

/** Module Level Dependencies */

/** Other Module Dependencies */
import * as _ from 'lodash';

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
    address : any;

    constructor() {
        this.addressList = [];
        this.showDiv = true;
        this.address = {};
    }

    addClick() {
        this.showDiv = false;
        if (this.addressList.length > 0) {
            var currentAddress = _.find(this.addressList, ['type', 'current']);
            var permanentAddress = _.find(this.addressList, ['type', 'permanent']);

            if (currentAddress) {
                this.address.currentAddress = currentAddress.address;
                this.address.currentDocument = currentAddress.document;
            }
            if (permanentAddress) {
                this.address.permanentAddress = permanentAddress.address;
                this.address.permanentDocument = permanentAddress.document;
            }
        }
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
