 /* Angular Dependencies */
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule as AngularCommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Third party Dependencies */
import { TranslateLoader } from 'ng2-translate';

import { ScheduleModule, DataTableModule, SharedModule, ButtonModule, InputTextareaModule, CalendarModule, DropdownModule, DialogModule, ConfirmDialogModule, GrowlModule, ConfirmationService, ProgressBarModule, CheckboxModule, FileUploadModule } from 'primeng/primeng';

/* Framework Dependencies */
import { MultilingualModule, translateFactory } from '../../framework.ref';

/* Module Level Dependencies */
import { LoginService } from './services/login.service';
import { IfAuthorize } from './directives/ifAuthorize.directive';
import {UnauthorizedAccessComponent} from '../errorPages/unauthorizedAccess/unauthorizedAccess.component';


let translate = MultilingualModule.forRoot([{
    provide: TranslateLoader,
    deps: [Http],
    useFactory: (translateFactory)
}]);

let primeNgComponents = [
    ScheduleModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    DropdownModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule,
    ProgressBarModule,
    CheckboxModule,
    FileUploadModule
];

/**
 * Imports Declaration
 */
let imports = [
    RouterModule,
    AngularCommonModule,  
    FormsModule, 
    ReactiveFormsModule,    
    translate];

/*  Exported components declaration   */
let exportComponents = [
    RouterModule,    
    FormsModule,
    ReactiveFormsModule,
    AngularCommonModule,
    //translate,
    IfAuthorize,
    UnauthorizedAccessComponent,
    ...primeNgComponents
    ];

/**
 * Components/ Directives declaration
 */
let declarations = [
    IfAuthorize,
    UnauthorizedAccessComponent
];

/**
 * Providers Declaration
 */
let providers = [LoginService, ConfirmationService];

/* Module Definition */
@NgModule({
    imports,
    exports: exportComponents,
    declarations,
    providers,
})
export class CommonModule { }

/* Export Translation Module */
export var TranslateModule = MultilingualModule.forRoot([{
    provide: TranslateLoader,
    deps: [Http],
    useFactory: (translateFactory)
}]);
