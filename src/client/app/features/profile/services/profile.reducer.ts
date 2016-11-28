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

        case PROFILE_ACTIONS.GET_ACHIEVEMENTS:
            return Object.assign([], state, {
                achievements: action.payload
            });

        // case PROFILE_ACTIONS.ADD_ACHIEVEMENT:  
        //      return Object.assign([], state, {
        //         achievements: action.payload
        //     });

        case PROFILE_ACTIONS.GET_CERTIFICATES:
            return Object.assign([], state, {
                cetificates: action.payload
            });

        case PROFILE_ACTIONS.GET_SKILLS:
            return Object.assign([], state, {
                skills: action.payload
            });
        case PROFILE_ACTIONS.GET_EDUCATION:
            return Object.assign([], state, {
                education: action.payload
            });

        case PROFILE_ACTIONS.GET_EMPLOYMENT_HISTORY:
            return Object.assign([], state, {
                employmentHistory: action.payload
            });
        case PROFILE_ACTIONS.GET_EXPERIENCE:
            return Object.assign([], state, {
                experience: action.payload
            });

        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const profileReducer: ActionReducer<any> = profileReducerFn;
