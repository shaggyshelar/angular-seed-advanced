/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent, LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { USER_LIST_ACTIONS } from '../services/user.actions';
import { User } from '../models/user';

/** Component Definition */
@BaseComponent({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    user: Observable<any>;
    selectedUser: User;
    id: any;
    constructor(private store: Store<any>, private logService: LogService, private route: ActivatedRoute) {
        this.logService.debug('UserComponent : constructor');
        this.user = store.select('users');
    }

    ngOnInit() {
        this.logService.debug('UserComponent : ngOnInit');
        this.id = this.route.params.subscribe(params => {
            this.logService.debug('UserComponent : params ');
            console.dir(params);
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.store.dispatch({ type: USER_LIST_ACTIONS.DETAILS, payload: this.id });
        });
    }
}
