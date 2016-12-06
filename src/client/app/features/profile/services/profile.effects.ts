/**
 * Timesheet Effects Module
 */

/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
//import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

/** Framework Dependencies */
import { LogService } from '../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from './profile.actions';
import { ProfileService } from './profile.service';
import { AchievementService } from './achievement.service';
import { CertificateService } from './certificate.service';
import { SkillService } from './skill.service';
import { EducationService } from './education.service';
import { EmploymentHistoryService } from './employmentHistory.service';
import { ExperienceService } from './experience.service';
import { IdentityProofService } from './identityProof.service';
import { NomineesService } from './nominees.service';
import { PassportService } from './passport.service';
import { AddressService } from './address.service';
import { UanService } from './uan.service';
import { VisaService } from './visa.service';

@Injectable()
export class ProfileEffects {

    //Profile Info
    @Effect() details$ = this.actions$
        .ofType(PROFILE_ACTIONS.DETAILS)
        .switchMap(action => this.profileService.getProfile(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.DETAILS_FETCHED, payload: res });
        });

    //Achievement
    @Effect() getAchievement$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_ACHIEVEMENTS)
        .switchMap(action => this.achievementService.getAchievements())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_ACHIEVEMENTS, payload: res });
        });
    //Ceritificates
    @Effect() getCertificate$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_CERTIFICATES)
        .switchMap(action => this.cerificateService.getCertificates())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_CERTIFICATES, payload: res });
        });

    //Skills
    @Effect() getSkill$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_SKILLS)
        .switchMap(action => this.skillService.getSkills())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_SKILLS, payload: res });
        });

    //Education
    @Effect() getEducation$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_EDUCATION)
        .switchMap(action => this.educationService.getEducation())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_EDUCATION, payload: res });
        });

    //Employment History
    @Effect() getEmploymentHistory$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_EMPLOYMENT_HISTORY)
        .switchMap(action => this.employmentHistoryService.getEmploymentHistory())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_EMPLOYMENT_HISTORY, payload: res });
        });

    //Experience
    @Effect() getExperience$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_EXPERIENCE)
        .switchMap(action => this.experienceService.getExperience())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_EXPERIENCE, payload: res });
        });

    //Indentity Proof
    @Effect() getIdentityProof$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_IDENTITY_PROOF)
        .switchMap(action => this.identityProofService.getIdentityProof(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_IDENTITY_PROOF, payload: res });
        });

    //Nominees
    @Effect() getNominees$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_NOMINEES)
        .switchMap(action => this.nomineesService.getNominees(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_NOMINEES, payload: res });
        });

    //Passport
    @Effect() getPassport$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_PASSPORT)
        .switchMap(action => this.passportService.getPassport())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_PASSPORT, payload: res });
        });

    //Address
    @Effect() getAddress$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_ADDRESS)
        .switchMap(action => this.addressService.getAddress())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_ADDRESS, payload: res });
        });

    //Uan
    @Effect() getUan$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_UAN)
        .switchMap(action => this.uanService.getUan(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_UAN, payload: res });
        });

    //Visa
    @Effect() getVisa$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_VISA)
        .switchMap(action => this.visaService.getVisa())
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_VISA, payload: res });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private profileService: ProfileService,
        private achievementService: AchievementService,
        private cerificateService: CertificateService,
        private skillService: SkillService,
        private educationService: EducationService,
        private employmentHistoryService: EmploymentHistoryService,
        private experienceService: ExperienceService,
        private identityProofService: IdentityProofService,
        private nomineesService: NomineesService,
        private passportService: PassportService,
        private addressService: AddressService,
        private uanService: UanService,
        private visaService: VisaService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('ProfileEffects : constructor');
    }
}
