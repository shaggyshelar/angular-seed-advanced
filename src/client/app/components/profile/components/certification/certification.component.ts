/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Other Module Dependencies */
import * as _ from 'lodash';
import * as moment from 'moment/moment';

export interface Select {
    id: number;
    name: string;
};

export interface CertificationForm {
    id: number;
    option: Select;
    code: Select;
    fromEspl: boolean;
    date: string;
    document: string;
}

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
    certificationForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.certifications = [];
        this.certificationOptions = [];
        this.certificationCodes = [];
        this.showDiv = true;
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

        this.certificationForm = this.formBuilder.group({
            id: [null],
            option: ['', [Validators.required]],
            code: [''],
            fromEspl: [''],
            date: ['', [Validators.required]],
            document: ['',]
        });
    }

    onAddClick() {
        this.showDiv = false;
        this.certificationForm.reset();
    }
    onSubmit({ value, valid }: { value: CertificationForm, valid: boolean }) {
        this.showDiv = true;
        this.certifications = [{
            id: 1,
            certificate: value.option.name,
            code: '1111',
            certificateDate: moment(value.date).format('DD/MM/YYYY'),
            fromEspl: value.fromEspl,
            document: '',
            status: 'pending for approval',
            comment: ''
        }];

    }

    cancel() {
        this.showDiv = true;
        this.certificationForm.reset();
    }

    selectCertification(certificationData) {
        this.showDiv = false;
        var date = certificationData.date.split('/');
        this.certificationForm.setValue({
            id: certificationData.id,
            option: _.find(this.certificationOptions, ['label', certificationData.option]).value,
            code: _.find(this.certificationCodes, ['label', '11111']).value,
            date: new Date(date[2] + '-' + date[1] + '-' + date[0]),
            fromEspl: certificationData.fromEspl,
        });
    }
}
