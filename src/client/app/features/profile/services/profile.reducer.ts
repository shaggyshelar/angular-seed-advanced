/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from './profile.actions';
import { ProfileState } from '../models/profile.state';

/** Reducer Function Definition */
function profileReducerFn(state: ProfileState, action: Action): ProfileState {
    switch (action.type) {
        case PROFILE_ACTIONS.DETAILS_FETCHED:
            let newState: ProfileState = Object.assign({}, state, {
                profile: action.payload
            });
            return newState; 
        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const profileReducer: ActionReducer<any> = profileReducerFn;
