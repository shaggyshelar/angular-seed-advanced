/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { RouterModule  } from '@angular/router';

/** Other Module Dependencies */
import { CommonModule, TranslateModule } from '../../shared/index';

/** Module level Dependencies */
import { ChangePasswordComponent } from './components/change-password.component';
import { ChangePasswordRoutingModule } from './change-password.routes';

/** Module Import Declarations */
let imports = [ChangePasswordRoutingModule, FormsModule,CommonModule, TranslateModule, BrowserModule];

/** Component/Directive Declarations */
let declarations = [
    ChangePasswordComponent
];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class ChangePasswordModule { }
