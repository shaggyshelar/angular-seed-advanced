/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule  } from '@angular/router';

/** Third Party Dependencies */

/** Module level Dependencies */
import { CommonModule, TranslateModule } from '../core/index';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

/** Service Declarations */
import { ChangePasswordService } from './services/change-password.service'

/** Module Definition */
@NgModule({
    imports: [
        // FormsModule,
        // ReactiveFormsModule,
        CommonModule,
        TranslateModule
    ],
    exports: [],
    declarations: [
        ChangePasswordComponent
    ],
    providers: [ChangePasswordService]
})
export class ChangePasswordModule {
}
