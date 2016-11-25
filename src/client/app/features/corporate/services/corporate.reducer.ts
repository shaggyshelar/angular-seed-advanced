/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { CORPORATE_ACTIONS } from './corporate.actions';
import { CorporteState } from '../models/corporate.state';

const initialState: CorporteState = {
    conferenceEvents: [],
    tickets: []
};
/** Reducer Function Definition */
function corporateReducerFn(state: CorporteState, action: Action): CorporteState {
    switch (action.type) {

        case CORPORATE_ACTIONS.CONFERENCE_BOOKING_INITIALIZED:
            let newState: CorporteState = Object.assign({}, state, {
                conferenceEvents: action.payload
            });
            return newState;

        default:
            return state;
    }
};

/** corporate Reducer Function Export */
export const corporateReducer: ActionReducer<any> = corporateReducerFn;
