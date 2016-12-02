/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Module Level Dependencies */
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../models/certificate';

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
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'certification',
    templateUrl: 'certification.component.html',
    styleUrls: ['certification.component.css']
})
export class CertificationComponent implements OnInit {
    public certifications: Observable<Certificate>;
    certificationOptions: SelectItem[];
    certificationCodes: SelectItem[];
    showDiv: boolean;
    certificationForm: FormGroup;
    public profile_Observable: Observable<any>;
    msgs: Message[] = [];

    constructor(private formBuilder: FormBuilder, private certificateService: CertificateService) {
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
        });

        this.certifications = this.certificateService.getCertificates();
    }

    onAddClick() {
        this.showDiv = false;
        this.certificationForm.reset();
    }
    onSubmit({ value, valid }: { value: CertificationForm, valid: boolean }) {
        if (value.id) {
            let params = {
                ID: value.id,
                Name: value.option.name,
                Code: value.code.name,
                Date: moment(value.date).format('DD/MM/YYYY'),
                FilePath: '',
                FromESPL: value.fromEspl
            };
            this.certificateService.updateCertificate(value.id, params).subscribe(res => {
                if (res) {
                    this.certifications = this.certificateService.getCertificates();
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Certificate Information updated successfully.' });
                    this.showDiv = true;
                }
            });
        } else {
            let params = {
                Name: value.option.name,
                Code: value.code && value.code.name ? value.code.name : '',
                Date: moment(value.date).format('DD/MM/YYYY'),
                FilePath: '',
                FromESPL: value.fromEspl
            };
            this.certificateService.addCertificate(params).subscribe(res => {
                if (res) {
                    this.certifications = this.certificateService.getCertificates();
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Certificate Information saved successfully.' });
                    this.showDiv = true;
                    this.showDiv = true;
                }
            });
        }
    }

    cancel() {
        this.showDiv = true;
        this.certificationForm.reset();
    }

    selectCertification(certificationData) {
        this.showDiv = false;
        var date = certificationData.Date.split('/');
        this.certificationForm.setValue({
            id: certificationData.ID,
            option: _.find(this.certificationOptions, ['label', certificationData.Name]) ? _.find(this.certificationOptions, ['label', certificationData.Name]).value : '',
            code: _.find(this.certificationCodes, ['label', certificationData.Code]) ? _.find(this.certificationCodes, ['label', certificationData.Code]).value : '',
            date: new Date(date[2] + '-' + date[1] + '-' + date[0]),
            fromEspl: certificationData.FromESPL,
        });
    }
}
