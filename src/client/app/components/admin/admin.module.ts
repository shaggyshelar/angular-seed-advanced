/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Other Module Dependencies */
import {CommonModule, TranslateModule} from '../../shared/index';

/** Module level Dependencies */
import { FeatureComponent } from './components/feature/feature.component';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { RoleAddEditComponent } from './components/roles/role-add-edit/role-add-edit.component';
import { AdminRoutingModule } from './admin.routes';
import { FeatureService } from './services/feature.service';
import { RoleService } from './services/role.service';

/** Module Import Declarations */
let imports = [AdminRoutingModule,RouterModule,FormsModule,BrowserModule,CommonModule, TranslateModule];

/** Component/Directive Declarations */
let declarations = [FeatureComponent,RoleListComponent,RoleAddEditComponent];

/** Providers Declarations*/
let providers = [FeatureService,RoleService];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class AdminModule { }
