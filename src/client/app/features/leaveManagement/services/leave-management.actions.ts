/**
 * Leave Management Actions
 */

const CONTEXT: string = 'LEAVE_MANAGEMENT';

/**
 * ngrx setup start
 */

interface ILeaveManagementActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
    ADD: string;
    LEAVE_ADDED: string;
    FETCH: string;
    FETCH_SUCCESS: string;
    ACTION_FAILED: string;
    SUBMIT: string;
    SUBMIT_SUCCESS: string;
    SUBMIT_FAILED: string;

}

export const LEAVE_MANAGEMENT_ACTIONS: ILeaveManagementActions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED: `${CONTEXT}_INITIALIZED`,
    INIT_FAILED: `${CONTEXT}_INIT_FAILED`,
    ADD: `${CONTEXT}_ADD`,
    LEAVE_ADDED: `${CONTEXT}_ADDED`,
    FETCH: `${CONTEXT}_FETCH`,
    FETCH_SUCCESS: `${CONTEXT}_FETCH_SUCCESS`,
    ACTION_FAILED: `${CONTEXT}_ACTION_FAILED`,
    SUBMIT: `${CONTEXT}_SUBMIT`,
    SUBMIT_SUCCESS: `${CONTEXT}_SUBMIT_SUCCESS`,
    SUBMIT_FAILED: `${CONTEXT}_SUBMIT_FAILED`
};
