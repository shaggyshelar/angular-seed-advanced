/** Profile Application State */
import { Profile } from './profile';
import { Achievement } from './achievement';
import { Certificate } from './certificate';
import { Skill } from './skill';
import { Experience } from './experience';
import { EmploymentHistory } from './employmentHistory';
import { Education } from './education';
import { IdentityProof } from './identityProof';
import { Nominee } from './nominee';
import { Passport } from './passport';
import { Visa } from './visa';
import { Uan } from './uan';
import { Address } from './address';

/** State Definition */
export interface ProfileState {
    profile: Profile;
    achievements: Achievement[];
    cetificates: Certificate[];
    skills: Skill[];
    experience: Experience[];
    employmentHistory: EmploymentHistory[];
    education: Education[];
    identityProofs: IdentityProof[];
    nominees: Nominee[];
    passport: Passport[];
    visa: Visa[];
    uan: Uan[];
    address: Address[];
}
