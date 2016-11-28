/**
 * Profile Actions 
 */

const CONTEXT: string = 'CORPORATE';

/**
 * ngrx setup start --
 */
interface ICorporateActions {
    INIT: string;
    INITIALIZED: string;
    TICKET_INIT: string;
    TICKET_INITIALIZED: string;
    TICKET_ADD: string;
    TICKET_EDIT: string;
    TICKET_GET: string;
    TICKET_DETAILS_FETCHED: string;
}

export const CORPORATE_ACTIONS: ICorporateActions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED: `${CONTEXT}_INITIALIZED`,
    TICKET_INIT: `${CONTEXT}_TICKET_INIT`,
    TICKET_INITIALIZED: `${CONTEXT}_TICKET_INITIALIZED`,
    TICKET_ADD: `${CONTEXT}_TICKET_ADD`,
    TICKET_EDIT: `${CONTEXT}_TICKET_EDIT`,
    TICKET_GET: `${CONTEXT}_TICKET_GET`,
    TICKET_DETAILS_FETCHED: `${CONTEXT}_TICKET_DETAILS_FETCHED`
};
