/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'achievement',
    templateUrl: 'achievement.component.html',
    styleUrls: ['achievement.component.css']
})
export class AchievementComponent {
    achievements: any[];
    showDiv: boolean;
    achivement: any;

    constructor() {
        this.achievements = [];
        this.achivement = {};
        this.showDiv = true;
    }

    onAddClick() {
        this.showDiv = false;
        this.achivement = {};
    }
    submit() {
        this.achievements = [{
            id: 1,
            achievement: 'achievement1',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }
    selectAchievement(achievementData) {       
        this.achivement.description = achievementData.achievement;
        this.showDiv = false;
    }
}
