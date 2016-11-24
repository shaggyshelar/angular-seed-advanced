/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { CORPORATE_ACTIONS } from './corporate.actions';
import { CorporteState } from '../models/corporate.state';

const initialState: CorporteState = {
  conferenceEvents:[],
  tickets:[]
};
/** Reducer Function Definition */
function corporateReducerFn(state :CorporteState={conferenceEvents:[], tickets:[]}, action: Action) {
    switch (action.type) {

        case CORPORATE_ACTIONS.CONFERENCE_BOOKING_INITIALIZED:
            return Object.assign({},state,{
               conferenceEvents :action.payload
            });

        default:
            return state;
    }
};

/** Timesheet Reducer Function Export */
export const corporateReducer: ActionReducer<any> = corporateReducerFn;
