/**
 * Profile Actions 
 */

const CONTEXT: string = 'LEAVE';

/**
 * ngrx setup start --
 */
interface ILeaveActions {
    INIT: string;
    LEAVE_DETAILS: string;
    LEAVE_DETAILS_FETCHED: string;
    LEAVE_RECORD: string;
    LEAVE_RECORD_FETCHED: string;
    HOLIDAYS: string;
    HOLIDAYS_FETCHED: string;
}

export const LEAVE_ACTIONS: ILeaveActions = {
    INIT: `${CONTEXT}_INIT`,
    LEAVE_DETAILS: `${CONTEXT}_LEAVE_DETAILS`,
    LEAVE_DETAILS_FETCHED: `${CONTEXT}_LEAVE_DETAILS_FETCHED`,
    LEAVE_RECORD: `${CONTEXT}_LEAVE_RECORD`,
    LEAVE_RECORD_FETCHED: `${CONTEXT}_LEAVE_RECORD_FETCHED`,
    HOLIDAYS: `${CONTEXT}_HOLIDAYS`,
    HOLIDAYS_FETCHED: `${CONTEXT}_HOLIDAYS_FETCHED`,
};
