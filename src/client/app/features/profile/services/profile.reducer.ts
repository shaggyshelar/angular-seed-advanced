/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from './profile.actions';
import { ProfileState } from '../models/profile.state';

/** Reducer Function Definition */
function profileReducerFn(state: ProfileState, action: Action): ProfileState {
    switch (action.type) {
        //Profile Info
        case PROFILE_ACTIONS.DETAILS_FETCHED:
            let newState: ProfileState = Object.assign({}, state, {
                profile: action.payload
            });
            return newState;

        //Achievement
        case PROFILE_ACTIONS.GET_ACHIEVEMENTS:
            return Object.assign([], state, {
                achievements: action.payload
            });

        // case PROFILE_ACTIONS.ADD_ACHIEVEMENT:  
        //      return Object.assign([], state, {
        //         achievements: action.payload
        //     });

        //Ceritificates
        case PROFILE_ACTIONS.GET_CERTIFICATES:
            return Object.assign([], state, {
                cetificates: action.payload
            });

        //Skills
        case PROFILE_ACTIONS.GET_SKILLS:
            return Object.assign([], state, {
                skills: action.payload
            });

        //Education
        case PROFILE_ACTIONS.GET_EDUCATION:
            return Object.assign([], state, {
                education: action.payload
            });

        //Employment History
        case PROFILE_ACTIONS.GET_EMPLOYMENT_HISTORY:
            return Object.assign([], state, {
                employmentHistory: action.payload
            });

        //Experience
        case PROFILE_ACTIONS.GET_EXPERIENCE:
            return Object.assign([], state, {
                experience: action.payload
            });

        //Indentity Proof
        case PROFILE_ACTIONS.GET_IDENTITY_PROOF:
            return Object.assign([], state, {
                identityProofs: action.payload
            });

        //Nominees
        case PROFILE_ACTIONS.GET_NOMINEES:
            return Object.assign([], state, {
                nominees: action.payload
            });

        //Passport
        case PROFILE_ACTIONS.GET_PASSPORT:
            return Object.assign([], state, {
                passport: action.payload
            });

        //Address
        case PROFILE_ACTIONS.GET_ADDRESS:
            return Object.assign([], state, {
                address: action.payload
            });

        //Uan
        case PROFILE_ACTIONS.GET_UAN:
            return Object.assign([], state, {
                uan: action.payload
            });

        //Visa
        case PROFILE_ACTIONS.GET_VISA:
            return Object.assign([], state, {
                visa: action.payload
            });
        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const profileReducer: ActionReducer<any> = profileReducerFn;
