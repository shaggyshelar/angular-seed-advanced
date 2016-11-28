/** Profile Application State */
import { Profile } from './profile';
import { Achievement } from './achievement';
import { Certificate } from './certificate';
import { Skill } from './skill';
import { Experience } from './experience';
import { EmploymentHistory } from './employmentHistory';
import { Education } from './education';

/** State Definition */
export interface ProfileState {
    profile: Profile;
    achievements: Achievement[];
    cetificates: Certificate[];
    skills: Skill[];
    experience: Experience[];
    employmentHistory: EmploymentHistory[];
    education: Education[];
}
