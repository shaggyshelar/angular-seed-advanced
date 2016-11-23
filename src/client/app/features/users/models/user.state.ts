import { User } from './user';

export interface UserState {
    userList: User[];
    selectedUser: User;
}
