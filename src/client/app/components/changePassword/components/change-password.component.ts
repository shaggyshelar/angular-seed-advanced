import { BaseComponent } from '../../../frameworks/core/index';

@BaseComponent({
    moduleId: module.id,
    selector: 'change-password-component',
    templateUrl: 'change-password.component.html',
    styleUrls: ['change-password.component.css']
})

export class ChangePasswordComponent {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;

    newPasswordWarning: string = '';
    oldPasswordWarning: string = '';

    //enable submit button on isFormClean === true
    isFormClean: boolean = false;

    confirmPasswordValidation() {
        if (this.newPassword.trim() && this.confirmPassword.trim()) {
            if (this.newPassword.trim() !== this.confirmPassword.trim()) {
                this.newPasswordWarning = 'Passwords donot match';
                this.isFormClean = false;
            } else if (this.newPassword.trim() === this.confirmPassword.trim()) {
                this.newPasswordWarning = '';
                this.isFormClean = true;
            }
        } else if(!this.oldPassword.trim()) {
            this.oldPasswordWarning = 'Cannot be left blank!';
            this.isFormClean = false;
        } else if(!this.newPassword.trim()) {
            this.newPasswordWarning = 'Cannot be left blank!';
            this.isFormClean = false;
        }
    }

    changePassword() {
        if(this.isFormClean) {
            alert('Password : ' + this.confirmPassword);
        }
    }
}
