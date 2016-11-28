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
import { CerificateService } from './certificate.service';
import { SkillService } from './skill.service';
import { EducationService } from './education.service';
import { EmploymentHistoryService } from './employmentHistory.service';
import { ExperienceService } from './experience.service';

@Injectable()
export class ProfileEffects {

    @Effect() details$ = this.actions$
        .ofType(PROFILE_ACTIONS.DETAILS)
        .switchMap(action => this.profileService.getProfile(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.DETAILS_FETCHED, payload: res });
        });

    //Achievement
    @Effect() getAchievement$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_ACHIEVEMENTS)
        .switchMap(action => this.achievementService.getAchievements(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_ACHIEVEMENTS, payload: res });
        });

    // @Effect() addAchievement$ = this.actions$
    //     .ofType(PROFILE_ACTIONS.INITIALIZE_ADD_ACHIEVEMENT)
    //     .switchMap(action => this.achievementService.addAchievements(action.payload))
    //     .map(res => {          
    //         return ({ type: PROFILE_ACTIONS.ADD_ACHIEVEMENT, payload: res });
    //     });

    @Effect() getCertificate$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_CERTIFICATES)
        .switchMap(action => this.cerificateService.getCertificates(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_CERTIFICATES, payload: res });
        });

    @Effect() getSkill$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_SKILLS)
        .switchMap(action => this.skillService.getSkills(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_SKILLS, payload: res });
        });
    @Effect() getEducation$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_EDUCATION)
        .switchMap(action => this.educationService.getEducation(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_EDUCATION, payload: res });
        });

    @Effect() getEmploymentHistory$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_EMPLOYMENT_HISTORY)
        .switchMap(action => this.employmentHistoryService.getEmploymentHistory(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_EMPLOYMENT_HISTORY, payload: res });
        });

    @Effect() getExperience$ = this.actions$
        .ofType(PROFILE_ACTIONS.INITIALIZE_GET_EXPERIENCE)
        .switchMap(action => this.experienceService.getExperience(action.payload))
        .map(res => {
            return ({ type: PROFILE_ACTIONS.GET_EXPERIENCE, payload: res });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private profileService: ProfileService,
        private achievementService: AchievementService,
        private cerificateService: CerificateService,
        private skillService: SkillService,
        private educationService: EducationService,
        private employmentHistoryService: EmploymentHistoryService,
        private experienceService: ExperienceService,
        private http: Http,
        private logService: LogService
    ) {
        this.logService.debug('ProfileEffects : constructor');
    }
}
