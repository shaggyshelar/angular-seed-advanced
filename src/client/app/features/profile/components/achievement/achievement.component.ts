
/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Module Level Dependencies */
import { AchievementService } from '../../services/achievement.service';
import { Achievement } from '../../models/achievement';

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
    showDiv: boolean;
    achievementForm: FormGroup;
    public achievements: Observable<Achievement>;
    msgs: Message[] = [];

    constructor(private formBuilder: FormBuilder, private achievementService: AchievementService) {
        this.showDiv = true;
    }
    ngOnInit(): void {
        this.achievements = this.achievementService.getAchievements();

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
        if (value.id) {
            let params = {
                ID: value.id,
                Name: value.description
            };
            this.achievementService.updateAchievement(value.id, params).subscribe(res => {
                if (res) {
                    this.achievements = this.achievementService.getAchievements();
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Achievement updated successfully.' });
                    this.showDiv = true;
                }
            });
        } else {
            let params = {
                Name: value.description
            };
            this.achievementService.addAchievement(params).subscribe(res => {
                if (res) {
                    this.achievements = this.achievementService.getAchievements();
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Achievement saved successfully.' });
                    this.showDiv = true;
                }
            });
        }
    }
    cancel() {
        this.showDiv = true;
        this.achievementForm.reset();
    }
    editAchievement(achievementData) {
        this.achievementForm.setValue({
            id: achievementData.ID,
            description: achievementData.Name
        });
        this.showDiv = false;
    }
}
