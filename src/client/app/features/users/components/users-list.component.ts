/** Angular Dependencies */
import { OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { USER_LIST_ACTIONS } from '../services/user.actions';

/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'users-list',
    templateUrl: 'users-list.component.html'
})
export class UsersListComponent implements OnInit {
    public users$: Observable<any>;
    public newUser: string = '';
    @Output() deleteUser = new EventEmitter(false);

    constructor(private store: Store<any>, private logService: LogService) {
        this.logService.debug('UsersListComponent : constructor');
        this.users$ = store.select('users');
        this.users$.subscribe(res => console.dir(res.json()));
        this.store.dispatch({ type: USER_LIST_ACTIONS.INIT });
    }
    /**
     * ngOnInit Method
     */
    ngOnInit() {
        this.logService.debug('UsersListComponent : ngOnInit');
    }
    /**
     * addName method
     */
    addName(): boolean {
        this.store.dispatch({ type: USER_LIST_ACTIONS.ADD, payload: this.newUser });
        this.newUser = '';
        return false;
    }
    selectUser(): void {
        this.store.dispatch({ type: USER_LIST_ACTIONS.SELECT });
    }
    // deleteUser(user) : boolean {
    //     this.store.dispatch({type:USER_LIST_ACTIONS.DELETE, payload : user.id});
    //     return false;
    // }
}
