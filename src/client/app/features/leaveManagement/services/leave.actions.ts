/**
 * Profile Actions 
 */

const CONTEXT: string = 'LEAVE';

/**
 * ngrx setup start --
 */
interface ILeaveActions {
    INIT: string;
    DETAILS: string;
    DETAILS_FETCHED: string;
}

export const LEAVE_ACTIONS: ILeaveActions = {
    INIT: `${CONTEXT}_INIT`,
    DETAILS : `${CONTEXT}_DELAILS`,
    DETAILS_FETCHED : `${CONTEXT}_DELAILS_FETCHED`
};
