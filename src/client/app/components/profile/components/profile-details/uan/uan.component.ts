/** Angular Dependencies */

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'UAN',
    templateUrl: 'uan.component.html',
    styleUrls: ['uan.component.css']
})
export class UANComponent {
    uanData: any[];
    showDiv: boolean;

    constructor() {
        this.uanData = [];
        this.showDiv = true;
    }

    submit() {
        this.uanData = [{
            id: 1,
            uanNumber: 'details1',
            fromESPL: 'true',
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
    }
}
