/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { ADMIN_ACTIONS } from './admin.actions';
import { AdminState } from '../models/admin.state';

/** Reducer Function Definition */
function AdminReducerFn(state: AdminState, action: Action): AdminState {
    switch (action.type) {
        case ADMIN_ACTIONS.FEATURE_INITIALIZED:
            let newState: AdminState = Object.assign({}, state, {
                featureList: action.payload
            });
            return newState;

        default:
            return state;
    }
};

/** Admin Reducer Function Export */
export const AdminReducer: ActionReducer<any> = AdminReducerFn;
