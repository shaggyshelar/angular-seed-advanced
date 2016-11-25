/**
 * Profile Actions 
 */

const CONTEXT: string = 'PROFILE';

/**
 * ngrx setup start --
 */
interface IProfileActions {
    INIT: string;
    DETAILS: string;
    DETAILS_FETCHED: string;
}

export const PROFILE_ACTIONS: IProfileActions = {
    INIT: `${CONTEXT}_INIT`,
    DETAILS : `${CONTEXT}_DELAILS`,
    DETAILS_FETCHED : `${CONTEXT}_DELAILS_FETCHED`   
};
