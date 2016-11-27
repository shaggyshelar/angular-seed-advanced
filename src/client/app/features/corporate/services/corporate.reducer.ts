/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { CORPORATE_ACTIONS } from './corporate.actions';
import { CorporteState } from '../models/corporate.state';

/** Reducer Function Definition */
function CorporteReducerFn(state: CorporteState, action: Action): CorporteState {
    switch (action.type) {
        case CORPORATE_ACTIONS.INITIALIZED:
            let newState: CorporteState = Object.assign({}, state, {
                conferenceEvents: action.payload
            });
            return newState;

        case CORPORATE_ACTIONS.TICKET_INITIALIZED:
            let newStates: CorporteState = Object.assign({}, state, {
                tickets: action.payload
            });
            return newStates;
        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const CorporateReducer: ActionReducer<any> = CorporteReducerFn;
