export const CONTEXT: string = 'USER';

/**
 * UserListAction  Interface
 */
interface IUserListActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
    ADD: string;
    USER_ADDED: string;
    DELETE: string;
    DELETE_SUCCESS: string;
    SELECT: string;
    DETAILS: string;
    DETAILS_FETCHED: string;
}

/**
 * UserList Actions List
 */
export const USER_LIST_ACTIONS: IUserListActions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED: `${CONTEXT}_INITIALIZED`,
    INIT_FAILED: `${CONTEXT}_INIT_FAILED`,
    ADD: `${CONTEXT}_ADD`,
    USER_ADDED: `${CONTEXT}_USER_ADDED`,
    DELETE: `${CONTEXT}_DELETE`,
    DELETE_SUCCESS: `${CONTEXT}_DELETE_SUCCESS`,
    SELECT: `${CONTEXT}_SELECT`,
    DETAILS : `${CONTEXT}_DELAILS`,
    DETAILS_FETCHED : `${CONTEXT}_DELAILS_FETCHED`
};
