/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { LEAVE_ACTIONS } from './leave.actions';
import { LeaveState } from '../models/leave.state';

/** Reducer Function Definition */
function LeaveReducerFn(state: LeaveState, action: Action): LeaveState {
    let newState: LeaveState;
    switch (action.type) {
        case LEAVE_ACTIONS.DETAILS_FETCHED:
            newState = Object.assign({}, state, {
                leaves: action.payload
            });
            return newState; 

        case LEAVE_ACTIONS.DETAIL_FETCHED:
            newState = Object.assign({}, state, {
                leave: action.payload
            });
            return newState; 

        case LEAVE_ACTIONS.HOLIDAYS_FETCHED:
        newState = Object.assign( {}, state, {
            holiday : action.payload
        });
        return newState;

        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const leaveReducer: ActionReducer<any> = LeaveReducerFn;
