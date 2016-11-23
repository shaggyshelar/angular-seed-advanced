
/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */

/** Other Module Dependencies */
import * as _ from 'lodash';

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

    constructor(private formBuilder: FormBuilder) {
        this.achievements = [];
        this.showDiv = true;
    }
    ngOnInit(): void {
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
        var achievementData = _.find(this.achievements, ['id', value.id]);
        if (achievementData) {
            achievementData.achievement = value.description;
        } else {
            this.achievements.push({
                id: this.achievements.length + 1,
                achievement: value.description,
                status: 'pending for approval',
                comment: ''
            });
        }
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
