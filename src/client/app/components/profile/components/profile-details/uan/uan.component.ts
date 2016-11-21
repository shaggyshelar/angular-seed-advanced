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
    uanObj:any;

    constructor() {
        this.uanData = [];
        this.showDiv = true;
        this.uanObj = {};
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
        if(this.uanData.length > 0) {
            this.uanObj.number = this.uanData[0].uanNumber;
            this.uanObj.fromESPL = this.uanData[0].fromESPL;
        }
    }
}
