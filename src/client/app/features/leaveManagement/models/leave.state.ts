/** Profile Application State */
import { Leave } from './leave';
import { Holiday } from './holiday';

/** State Definition */
export interface LeaveState {
    leave: Leave;
    leaves: Leave[];
    holiday: Holiday;
    holidays: Holiday[];
}
