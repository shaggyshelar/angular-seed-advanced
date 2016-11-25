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
}

export const CORPORATE_ACTIONS: ICorporateActions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED:`${CONTEXT}_INITIALIZED`
};
