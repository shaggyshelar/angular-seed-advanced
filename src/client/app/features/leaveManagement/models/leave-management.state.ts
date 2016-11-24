/** Leave Management Application State */
import { Leave } from './leave';
import { Employee } from './employee';
import { Holiday } from './holiday';

/** State Definition */
export interface LeaveManagementState {
    timesheets: Leave[];
    selectedTimesheet: Leave;
    employees: Employee[];
    selectedEmployee: Employee;
    holiday: Holiday[];
    selectedHoliday: Holiday;
}
