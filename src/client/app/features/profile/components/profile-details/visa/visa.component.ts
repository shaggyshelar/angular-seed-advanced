/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { Visa } from '../../../models/visa';
import { VisaService } from '../../../services/visa.service';

/** Other Module Dependencies */
import * as moment from 'moment/moment';

export interface VisaForm {
    id: number;
    number: string;
    expiryDate: string;
    type: string;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'visa',
    templateUrl: 'visa.component.html',
    styleUrls: ['visa.component.css']
})
export class VisaComponent implements OnInit {
    visa: Observable<Visa>;;
    showDiv: boolean;
    visaObj: any;
    visaForm: FormGroup;
    public profile_Observable: Observable<any>;
    msgs: Message[] = [];

    constructor(private formBuilder: FormBuilder, private visaService: VisaService) {
        this.showDiv = true;
        this.visaObj = {};
    }

    ngOnInit(): void {
        this.visaForm = this.formBuilder.group({
            id: null,
            number: ['', [Validators.required]],
            expiryDate: ['', [Validators.required]],
            type: ['', [Validators.required]]
        });
        this.visa = this.visaService.getVisa();
    }
    onAddClick() {
        this.showDiv = false;
        this.visaForm.reset();
    }
    onSubmit({ value, valid }: { value: VisaForm, valid: boolean }) {
        this.showDiv = true;
        if (value.id) {
            let params = {
                ID: value.id,
                Number: value.number,
                ExpDate: moment(value.expiryDate).format('DD/MM/YYYY'),
                Type: value.type
            };
            this.visaService.updateVisa(value.id, params).subscribe(res => {
                if (res) {
                    this.visa = this.visaService.getVisa();
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Visa Information updated successfully.' });
                    this.showDiv = true;
                }
            });
        } else {
            let params = {
                Number: value.number,
                ExpDate: moment(value.expiryDate).format('DD/MM/YYYY'),
                Type: value.type
            };
            this.visaService.addVisa(params).subscribe(res => {
                if (res) {
                    this.visa = this.visaService.getVisa();
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Visa Information saved successfully.' });
                    this.showDiv = true;
                }
            });
        }
    }
    cancel() {
        this.showDiv = true;
        this.visaForm.reset();
    }
    editVisa(visaData) {
        this.showDiv = false;
        var date = visaData.ExpDate.split('/');
        this.visaForm.setValue({
            id: visaData.ID,
            number: visaData.Number,
            type: visaData.Type,
            expiryDate: new Date(date[2] + '-' + date[1] + '-' + date[0])
        });
    }
}
