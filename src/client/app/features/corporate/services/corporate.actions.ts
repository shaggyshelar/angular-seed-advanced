/**
 * Timesheet Actions 
 */

const CONTEXT: string = 'CORPORATE';

/**
 * ngrx setup start --
 */
interface ICorporateActions {
    // INIT: string;
    // INITIALIZED: string;
    // INIT_FAILED: string;
    // ADD: string;
    // TIMESHEET_ADDED: string;
    // FETCH: string;
    // FETCH_SUCCESS: string;
    // ACTION_FAILED: string;
    // SUBMIT: string;
    // SUBMIT_SUCCESS: string;
    // SUBMIT_FAILED: string;
    CONFERENCE_BOOKING_INIT:string;
    CONFERENCE_BOOKING_INITIALIZED:string;
}

export const CORPORATE_ACTIONS: ICorporateActions = {
    // INIT: `${CONTEXT}_INIT`,
    // INITIALIZED: `${CONTEXT}_INITIALIZED`,
    // INIT_FAILED: `${CONTEXT}_INIT_FAILED`,
    // ADD: `${CONTEXT}_ADD`,
    // TIMESHEET_ADDED: `${CONTEXT}_ADDED`,
    // FETCH: `${CONTEXT}_FETCH`,
    // FETCH_SUCCESS: `${CONTEXT}_FETCH_SUCCESS`,
    // ACTION_FAILED: `${CONTEXT}_ACTION_FAILED`,
    // SUBMIT: `${CONTEXT}_SUBMIT`,
    // SUBMIT_SUCCESS: `${CONTEXT}_SUBMIT_SUCCESS`,
    // SUBMIT_FAILED: `${CONTEXT}_SUBMIT_FAILED`,
    CONFERENCE_BOOKING_INIT: `${CONTEXT}_CONFERENCE_BOOKING_INIT`,
    CONFERENCE_BOOKING_INITIALIZED: `${CONTEXT}_CONFERENCE_BOOKING_INITIALIZED`,
};
