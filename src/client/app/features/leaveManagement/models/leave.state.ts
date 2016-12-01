/** Profile Application State */
import { Leave } from './leave';
import { Holiday } from './holiday';
import { LeaveDetail } from './leaveDetail';

/** State Definition */
export interface LeaveState {
    leave: Leave;
    leaves: Leave[];
    holiday: Holiday;
    holidays: Holiday[];
    leaveDetail: LeaveDetail;
}
