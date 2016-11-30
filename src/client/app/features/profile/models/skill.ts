import { SkillType } from './skillType';
export interface Skill {
    ID: number;
    Description : string;
    Type : SkillType;
    Status: string;
    Comments: string;
    Approvers : string;
}
