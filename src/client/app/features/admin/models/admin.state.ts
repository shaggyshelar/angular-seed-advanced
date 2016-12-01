/**  Admin Application State */
import { Role } from './role';
import { Feature } from './feature';

/** State Definition */
export interface AdminState {
    featureList:Feature[];
    roleList: Role[];
}
