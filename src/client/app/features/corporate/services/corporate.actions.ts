/**
 * Profile Actions 
 */

const CONTEXT: string = 'CORPORATE';

/**
 * ngrx setup start --
 */
interface ICorporateActions {
    INIT: string;
    INITIALIZED:string;
    TICKET_INIT: string;
    TICKET_INITIALIZED:string;
}

export const CORPORATE_ACTIONS: ICorporateActions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED:`${CONTEXT}_INITIALIZED`,
    TICKET_INIT:`${CONTEXT}_TICKET_INIT`,
    TICKET_INITIALIZED:`${CONTEXT}_TICKET_INITIALIZED`,
};
