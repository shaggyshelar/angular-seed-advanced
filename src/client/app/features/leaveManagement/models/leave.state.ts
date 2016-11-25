/** Profile Application State */
import { Leave } from './leave';

/** State Definition */
export interface LeaveState {
    leave: Leave;
    leaves: Leave[];
}
