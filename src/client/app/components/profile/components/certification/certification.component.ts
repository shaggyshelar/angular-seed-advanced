/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Third Party Dependencies */
import {SelectItem} from 'primeng/primeng';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'certification',
    templateUrl: 'certification.component.html',
    styleUrls: ['certification.component.css']
})
export class CertificationComponent implements OnInit {
    certifications: any[];
    certificationOptions: SelectItem[];
    certificationCodes: SelectItem[];
    showDiv: boolean;
    certification: any;

    constructor() {
        this.certifications = [];
        this.certificationOptions = [];
        this.certificationCodes = [];
        this.showDiv = true;
        this.certification = {};
    }

    ngOnInit(): void {
        this.certificationOptions = [
            { label: 'Select', value: null },
            { label: 'Microsoft', value: { id: 1, name: 'Microsoft' } },
            { label: 'SalesForce', value: { id: 2, name: 'SalesForce' } },
            { label: 'CRM', value: { id: 3, name: 'CRM' } },
            { label: 'SharePoint', value: { id: 4, name: 'SharePoint' } },
        ];

        this.certificationCodes = [
            { label: 'Select', value: null },
            { label: '11111', value: { id: 1, name: '11111' } },
            { label: '11111', value: { id: 2, name: '11112' } },
            { label: '11113', value: { id: 3, name: '11113' } },
            { label: '11114', value: { id: 4, name: '11114' } },
        ];
    }

    onAddClick() {
        this.showDiv = false;
        this.certification = {};
    }
    submit() {
        this.certifications = [{
            id: 1,
            certificate: 'Microsoft',
            code: '11111',
            certificateDate: '01/02/2016',
            document: '',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }

    selectCertification(certificationData) {
        this.showDiv = false;
        this.certification = {
            option: this.certificationOptions[1].value,
            code: this.certificationCodes[1].value,
            date: certificationData.certificateDate
        };
    }  
}
