/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from '../../../services/profile.actions';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'UAN',
    templateUrl: 'uan.component.html',
    styleUrls: ['uan.component.css']
})
export class UANComponent implements OnInit {
    uanData: any[];
    showDiv: boolean;
    uanObj: any;
    public profile_Observable: Observable<any>;

    constructor(private store: Store<any>) {
        this.uanData = [];
        this.showDiv = true;
        this.uanObj = {};
    }

    ngOnInit(): void {
        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_UAN, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.uanData = res && res.uan ? res.uan : [];
            console.log('UAN', this.uanData);
        });
    }

    submit() {
        this.uanData = [{
            id: 1,
            uanNumber: 'details1',
            fromESPL: 'false',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }

    add() {
        this.showDiv = false;
        if (this.uanData.length > 0) {
            this.uanObj.number = this.uanData[0].uanNumber;
            this.uanObj.fromESPL = this.uanData[0].fromESPL;
        }
    }
}
