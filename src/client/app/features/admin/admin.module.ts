/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Third Party Dependencies */
 import { EffectsModule } from '@ngrx/effects';
 import { ActionReducer } from '@ngrx/store';

/** Other Module Dependencies */
import { CommonModule, TranslateModule } from '../core/index';

/** Module level Dependencies */
import { FeatureComponent } from './components/feature/feature.component';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { RoleAddEditComponent } from './components/roles/role-add-edit/role-add-edit.component';
import { FeatureService } from './services/feature/feature.service';
import { RoleService } from './services/role.service';
import { AdminReducer } from './services/admin.reducers';
import { FeatureEffects } from './services/feature/feature.effects';

/** Module Definition */
@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        EffectsModule.run(FeatureEffects),
    ],
    exports: [],
    declarations: [
        FeatureComponent,
        RoleListComponent,
        RoleAddEditComponent
    ],
    providers: [FeatureService,RoleService],
})
export class AdminModule {
    static reducers(): { [key: string]: ActionReducer<any> } {
        return { admin: AdminReducer };
    }
}
