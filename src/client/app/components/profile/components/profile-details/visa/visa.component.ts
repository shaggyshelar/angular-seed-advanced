/** Angular Dependencies */

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'visa',
    templateUrl: 'visa.component.html',
    styleUrls: ['visa.component.css']
})
export class VisaComponent {
    visa: any[];
    showDiv: boolean;
    visaObj :any;

    constructor() {
        this.visa = [];
        this.showDiv = true;
        this.visaObj = {};
    }

    ngOnInit(): void {
        this.visa=[];
    }
    onAddClick() {
        this.showDiv = false;
    }
    submit() {
        this.visa = [{
            id: 1,
            visaNumber: '123456',
            visaExpiryDate: '10/11/2013',
            visaType: '11 Months',
            document: '',
            status: 'Pending for approval',
            hrComments: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }
    editVisa (visaData) {
        this.showDiv=false;
        this.visaObj.number = visaData.visaNumber;
        this.visaObj.expiryDate = visaData.visaExpiryDate;
        this.visaObj.type = visaData.visaType;
        this.visaObj.document = visaData.document;
    }
}
