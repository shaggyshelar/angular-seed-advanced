/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { RouterModule  } from '@angular/router';

/** Third Party Dependencies */
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer } from '@ngrx/store';

/** Module level Dependencies */
import { CommonModule, TranslateModule } from '../../shared/index';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

/** Service Declarations */
import { ChangePasswordService } from './services/change-password.service'

/** Module Definition */
@NgModule({
    imports: [
        FormsModule,
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
