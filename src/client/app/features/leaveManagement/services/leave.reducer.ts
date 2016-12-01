/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from './leave.actions';
import { LeaveState } from '../models/leave.state';

/** Reducer Function Definition */
function LeaveReducerFn(state: LeaveState, action: Action): LeaveState {
    switch (action.type) {
        case LEAVE_ACTIONS.LEAVE_DETAILS_FETCHED:
            return Object.assign({}, state, {
                leaves: action.payload
            });

        case LEAVE_ACTIONS.LEAVE_RECORD_FETCHED:
            return Object.assign({}, state, {
                leave: action.payload
            });


        case LEAVE_ACTIONS.HOLIDAYS_FETCHED:
            return Object.assign({}, state, {
                holidays: action.payload
            });

        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const leaveReducer: ActionReducer<any> = LeaveReducerFn;
