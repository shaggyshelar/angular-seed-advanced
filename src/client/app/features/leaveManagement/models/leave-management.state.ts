/** Leave Management Application State */
import { Leave } from './leave';
import { Employee } from './employee';
import { Holiday } from './holiday';

/** State Definition */
export interface LeaveManagementState {
    leaves: Leave;
    // selectedTimesheet: Leave;
    // employees: Employee[];
    // selectedEmployee: Employee;
    // holiday: Holiday[];
    // selectedHoliday: Holiday;
}
