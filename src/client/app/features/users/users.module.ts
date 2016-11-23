/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
//import { CommonModule } from '@angular/common';

/** Third Party Dependencies */
import { ActionReducer } from '@ngrx/store';

/** Module Level Dependencies */
import { UserComponent } from './components/user.component';
import { UsersListComponent } from './components/users-list.component';
import { UserListService } from './services/user.service';
import { UserListEffects } from './services/user.effects';
import { userListReducer } from './services/user.reducer';
import { CommonModule } from '../core/index';

/** Module Definition */
@NgModule({
    imports: [
        EffectsModule.run(UserListEffects),
        FormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [UserComponent, UsersListComponent],
    providers: [UserListService],
})
export class UserModule {
    static reducers(): { [key: string]: ActionReducer<any> } {
        return { users: userListReducer };
    }
}
