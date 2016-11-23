/** Third Party Dependencies */
import { ActionReducer, Action } from '@ngrx/store';

/** Module Level Dependencies */
import { USER_LIST_ACTIONS } from './user.actions';

/** UserList Reducer Function */
export function userListReducerFn(state: any = [], action: Action) {
    switch (action.type) {
        case USER_LIST_ACTIONS.INITIALIZED:
            return [...action.payload];
        case USER_LIST_ACTIONS.USER_ADDED:
            return [...state, action.payload];
        case USER_LIST_ACTIONS.DETAILS_FETCHED : 
            return [action.payload];
        default:
            return state;
    }
};
/** UserList Reducer Function Definition */
export const userListReducer: ActionReducer<any> = userListReducerFn;
