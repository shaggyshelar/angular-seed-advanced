/** Timesheet Application State */
import { Timesheet } from './timesheet';
import { Employee } from './employee';

/** State Definition */
export interface TimesheetState {
    timesheets: Timesheet[];
    selectedTimesheet: Timesheet;
    employees: Employee[];
    selectedEmployee: Employee;
}
