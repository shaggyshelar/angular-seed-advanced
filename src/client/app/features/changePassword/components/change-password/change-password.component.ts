/** Angular Dependencies */
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

import { Component } from '@angular/core';


/** Module Level Dependencies */
import { ChangePasswordService } from '../../services/change-password.service';
import { ChangePassword } from '../../models/changePassword';

/** Other Module Dependencies */
import { MessageService } from '../../../core/shared/services/message.service';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

/** Component Declaration */

class FormFieldClass {
    constructor(
        public OldPassword: string,
        public NewPassword: string,
        public ConfirmPassword: string
    ) { }
}

@Component({
    moduleId: module.id,
    selector: 'change-password-component',
    templateUrl: 'change-password.component.html',
    styleUrls: ['change-password.component.css']
})

export class ChangePasswordComponent {
    passwrdObs: Observable<any>;
    model: FormFieldClass;

    isFormClean: boolean = false;
    isConfirmPasswordSame;

    newPasswordWarning: string;
    oldPasswordWarning: string;

    constructor(
        private messageService: MessageService,
        private passwordService: ChangePasswordService,

    ) {
        this.model = new FormFieldClass('', '', '');
        this.newPasswordWarning = this.oldPasswordWarning = '';
    }

    ngOnInit() {
    }

    doPasswordsMatch() {
        if (this.model.NewPassword === this.model.ConfirmPassword) {
            this.isConfirmPasswordSame = true;
            this.newPasswordWarning = '';
        } else {
            this.isConfirmPasswordSame = false;
            this.newPasswordWarning = 'Passwords do not match!';
        }
        (this.model.OldPassword !== '' && this.isConfirmPasswordSame) ? this.isFormClean = true : this.isFormClean = false;
    }

    checkForm() {
    }

    submitForm(form) {
        if (this.isFormClean && this.isConfirmPasswordSame) {
            this.passwrdObs = this.passwordService.changePassword(this.model);
            this.passwrdObs.subscribe(res => {
                if (res) {
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Password Changed!' });
                    debugger;
                    this.newPasswordWarning = '';
                    this.oldPasswordWarning = '';
                    this.model = new FormFieldClass('', '', '');
                } else {
                    this.messageService.addMessage({ severity: 'error', summary: 'Failed', detail: 'Password not changed!' });
                    debugger;
                    this.newPasswordWarning = res.message;
                    this.oldPasswordWarning = '';
                    this.model = new FormFieldClass('', '', '');
                }
            });
        }
    }
}
