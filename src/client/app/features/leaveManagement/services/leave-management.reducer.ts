/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { LEAVE_MANAGEMENT_ACTIONS } from './leave-management.actions';
import { LeaveManagementState } from '../models/leave-management.state';

/** Reducer Function Definition */
function leaveManagementReducerFn(state: LeaveManagementState[] = [], action: Action) {
    switch (action.type) {
        case LEAVE_MANAGEMENT_ACTIONS.INITIALIZED:
            return [...action.payload];

        default:
            return state;
    }
}

/** Leaves Recucer Function Export */
export const leaveManagementReducer: ActionReducer<any> = leaveManagementReducerFn;
