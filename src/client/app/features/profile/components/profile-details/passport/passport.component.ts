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

export interface PassportForm {
    number: string;
    expiryDate: string;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'passport',
    templateUrl: 'passport.component.html',
    styleUrls: ['passport.component.css']
})
export class PassportComponent implements OnInit {

    employmentHistory: any[];
    passport: any[];
    showDiv: boolean;
    passportForm: FormGroup;
    public profile_Observable: Observable<any>;

    constructor(private formBuilder: FormBuilder, private store: Store<any>) {
        this.passport = [];
        this.showDiv = true;
    }

    ngOnInit(): void {
        this.passportForm = this.formBuilder.group({
            number: ['', [Validators.required]],
            expiryDate: ['', [Validators.required]]
        });

        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_PASSPORT, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.passport = res && res.passport ? res.passport : [];
            console.log('Passport', this.passport);
        });
    }

    addClick() {
        this.showDiv = false;
        if (this.passport.length > 0) {
            var expiryDate = this.passport[0].passportExpiryDate.split('/');
            this.passportForm.setValue({
                number: this.passport[0].passportNumber,
                expiryDate: new Date(expiryDate[2] + '-' + expiryDate[1] + '-' + expiryDate[0]),
            });
        }
    }

    onSubmit({ value, valid }: { value: PassportForm, valid: boolean }) {
        this.showDiv = true;
        this.passport = [{
            id: 1,
            passportNumber: value.number,
            passportExpiryDate: moment(value.expiryDate).format('DD/MM/YYYY'),
            document: '',
            status: 'pending for approval',
            hrComment: ''
        }];
    }

    cancel() {
        this.showDiv = true;
        this.passportForm.reset();
    }
}
