/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Third Party Dependencies */
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer } from '@ngrx/store';

/** Module level Dependencies */
// Components Declarations
import { CommonModule, TranslateModule } from '../core/index';
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

// Services Delarations
import { ProfileService } from './services/profile.service';
import { AchievementService } from './services/achievement.service';
import { CerificateService } from './services/certificate.service';
import { SkillService } from './services/skill.service';
import { EducationService } from './services/education.service';
import { EmploymentHistoryService } from './services/employmentHistory.service';
import { ExperienceService } from './services/experience.service';
import { AddressService } from './services/address.service';
import { IdentityProofService } from './services/identityProof.service';
import { NomineesService } from './services/nominees.service';
import { PassportService } from './services/passport.service';
import { UanService } from './services/uan.service';
import { VisaService } from './services/visa.service';

import { ProfileEffects } from './services/profile.effects';
import { profileReducer } from './services/profile.reducer';

/** Module Definition */
@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        EffectsModule.run(ProfileEffects)
    ],
    declarations: [
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
    ],
    providers: [ProfileService, AchievementService, CerificateService, SkillService, EducationService, EmploymentHistoryService,
        ExperienceService, AddressService, IdentityProofService, NomineesService, PassportService, UanService, VisaService]
})

export class ProfileModule {
    static reducers(): { [key: string]: ActionReducer<any> } {
        return { profile: profileReducer };
    }
}
