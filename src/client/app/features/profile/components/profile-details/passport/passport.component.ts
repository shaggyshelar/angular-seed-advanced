/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */

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

    constructor(private formBuilder: FormBuilder) {
        this.passport = [];
        this.showDiv = true;
    }

    ngOnInit(): void {
        this.passportForm = this.formBuilder.group({
            number: ['', [Validators.required]],
            expiryDate: ['', [Validators.required]]
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
