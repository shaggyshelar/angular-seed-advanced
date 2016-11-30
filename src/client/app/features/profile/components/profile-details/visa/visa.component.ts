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
import * as moment from 'moment/moment';

export interface VisaForm {
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
    visa: any[];
    showDiv: boolean;
    visaObj: any;
    visaForm: FormGroup;
    public profile_Observable: Observable<any>;

    constructor(private formBuilder: FormBuilder, private store: Store<any>) {
        this.visa = [];
        this.showDiv = true;
        this.visaObj = {};
    }

    ngOnInit(): void {
        this.visa = [];
        this.visaForm = this.formBuilder.group({
            number: ['', [Validators.required]],
            expiryDate: ['', [Validators.required]],
            type: ['', [Validators.required]]
        });

        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_VISA, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.visa = res && res.visa ? res.visa : [];
            console.log('Visa', this.visa);
        });
    }
    onAddClick() {
        this.showDiv = false;
        this.visaForm.reset();
    }
    onSubmit({ value, valid }: { value: VisaForm, valid: boolean }) {
        this.showDiv = true;
        this.visa = [{
            id: 1,
            visaNumber: value.number,
            visaExpiryDate: moment(value.expiryDate).format('DD/MM/YYYY'),
            visaType: value.type,
            document: '',
            status: 'Pending for approval',
            hrComments: ''
        }];
    }
    cancel() {
        this.showDiv = true;
        this.visaForm.reset();
    }
    editVisa(visaData) {
        this.showDiv = false;
        var date = visaData.visaExpiryDate.split('/');
        this.visaForm.setValue({
            number: visaData.visaNumber,
            type: visaData.visaType,
            expiryDate: new Date(date[2] + '-' + date[1] + '-' + date[0])
        });
    }
}
