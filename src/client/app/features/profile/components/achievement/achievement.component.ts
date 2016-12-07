
/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Module Level Dependencies */
import { AchievementService } from '../../services/achievement.service';
import { Achievement } from '../../models/achievement';
import { MessageService } from '../../../core/shared/services/message.service';

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

    constructor(private formBuilder: FormBuilder, private achievementService: AchievementService, private messageService: MessageService) {
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
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Achievement updated successfully.' });
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
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Achievement saved successfully.' });
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
