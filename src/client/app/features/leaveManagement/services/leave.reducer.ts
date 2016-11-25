/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from './leave.actions';
import { LeaveState } from '../models/leave.state';

/** Reducer Function Definition */
function LeaveReducerFn(state: LeaveState, action: Action): LeaveState {
    switch (action.type) {
        case LEAVE_ACTIONS.DETAILS_FETCHED:
            let newState: LeaveState = Object.assign({}, state, {
                leaves: action.payload
            });
            return newState; 
        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const leaveReducer: ActionReducer<any> = LeaveReducerFn;
