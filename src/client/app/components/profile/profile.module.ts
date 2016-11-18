/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

/** Other Module Dependencies */
import { CommonModule, TranslateModule } from '../../shared/index';

/** Module level Dependencies */
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationComponent } from './components/certification/certification.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { VisaComponent } from './components/profile-details/visa/visa.component';
import { ProfileAddressComponent } from './components/profile-details/profile-address/profile-address.component';
import { UANComponent } from './components/profile-details/uan/uan.component';
import { PassportComponent } from './components/profile-details/passport/passport.component';
import { NomineesComponent } from './components/profile-details/nominees/nominees.component';
import { IdentityProofsComponent } from './components/profile-details/identity-proofs/identity-proofs.component';
/** Module Import Declarations */
let imports = [FormsModule,CommonModule, TranslateModule, BrowserModule];

/** Component/Directive Declarations */
let declarations = [
    MyProfileComponent,
    PersonalInfoComponent,
    EducationComponent,
    CertificationComponent,
    AchievementComponent,
    EmploymentHistoryComponent,
    SkillSetComponent,
    ExperienceComponent,
    ProfileDetailsComponent,
    VisaComponent,
    ProfileAddressComponent,
    UANComponent,
    PassportComponent,
    NomineesComponent,
    IdentityProofsComponent
];

/** Providers Declarations*/
let providers = [];

/** Module Definition */
@NgModule({
    imports,
    declarations,
    providers,
})
export class ProfileModule { }
