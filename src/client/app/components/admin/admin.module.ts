/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Other Module Dependencies */
import {CommonModule, TranslateModule} from '../../shared/index';

/** Module level Dependencies */
import { FeatureComponent } from './components/feature/feature.component';
import { AdminRoutingModule } from './admin.routes';
import { FeatureService } from './services/feature.service';

/** Module Import Declarations */
let imports = [AdminRoutingModule,RouterModule,FormsModule,BrowserModule,CommonModule, TranslateModule];

/** Component/Directive Declarations */
let declarations = [FeatureComponent];

/** Providers Declarations*/
let providers = [FeatureService];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class AdminModule { }
