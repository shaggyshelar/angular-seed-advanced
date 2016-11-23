/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { TIMESHEET_ACTIONS } from './timesheet.actions';
import { TimesheetState } from '../models/timesheet.state';

/** Reducer Function Definition */
function timesheetReducerFn(state: TimesheetState[] = [], action: Action) {
    switch (action.type) {

        case TIMESHEET_ACTIONS.INITIALIZED:
            return [...action.payload];

        case TIMESHEET_ACTIONS.TIMESHEET_ADDED:
            return [...state, action.payload];
            
        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const timesheetReducer: ActionReducer<any> = timesheetReducerFn;
