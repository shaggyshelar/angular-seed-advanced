
/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
/** Framework Level Dependencies */
import { BaseComponent, LogService } from '../../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from '../../services/profile.actions';

/** Other Module Dependencies */
//import * as _ from 'lodash';

export interface AchievementForm {
    id: number;
    description: string;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'achievement',
    templateUrl: 'achievement.component.html',
    styleUrls: ['achievement.component.css']
})
export class AchievementComponent implements OnInit {
    achievements: any[];
    showDiv: boolean;
    achievementForm: FormGroup;
    public profile_Observable: Observable<any>;

    constructor(private formBuilder: FormBuilder, private store: Store<any>, private logService: LogService) {
        this.achievements = [];
        this.showDiv = true;
    }
    ngOnInit(): void {
        let ProfileID = 1;
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_ACHIEVEMENTS, payload: ProfileID });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.achievements = res ? res.achievements : [];
            console.log('Achievements', this.achievements);
        });

        this.achievementForm = this.formBuilder.group({
            id: [null],
            description: ['', [Validators.required]]
        });
    }
    onAddClick() {
        this.showDiv = false;
        this.achievementForm.reset();
    }

    onSubmit({ value, valid }: { value: AchievementForm, valid: boolean }) {
        // var achievementData = _.find(this.achievements, ['id', value.id]);
        // if (achievementData) {
        //     achievementData.achievement = value.description;
        // } else {
        //     this.achievements.push({
        //         id: this.achievements.length + 1,
        //         achievement: value.description,
        //         status: 'pending for approval',
        //         comment: ''
        //     });
        // }
        let params = {
            Name: value.description
        };
        this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_ADD_ACHIEVEMENT, payload: params });
        this.profile_Observable = this.store.select('profile');
        this.profile_Observable.subscribe(res => {
            this.achievements = res ? res.achievements : [];
        });

        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
        this.achievementForm.reset();
    }
    editAchievement(achievementData) {
        this.achievementForm.setValue({
            id: achievementData.id,
            description: achievementData.achievement
        });
        this.showDiv = false;
    }
}
