/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';



/** Module Level Dependencies */
import { SkillSet } from '../../entity/skill-set';

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'skillSet',
  templateUrl: 'skill-set.component.html',
  styleUrls: ['skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
  skillSet: SkillSet[];
  skillTypes: SelectItem[];
  showDiv: boolean;
  skillSetObj:any;

  constructor(
    private router: Router) {
    this.skillTypes = [];
    this.showDiv = true;
    this.skillSetObj = {};
  }

  ngOnInit(): void {
    this.skillSet = [];
    this.skillTypes.push({ label: 'Select Skill Type', value: null });
    this.skillTypes.push({ label: 'Language/Technology', value: { id: 1, name: 'Language/Technology' } });
    this.skillTypes.push({ label: 'Database', value: { id: 2, name: 'Database' } });
  }

  onAddClick() {
    this.showDiv = false;
    this.skillSetObj = {};
  }
  submit() {
    this.skillSet = [{
      id: 1,
      skillType: 'Language / Technology',
      skills: 'C#',
      status: 'status',
      comments: 'Comment',
      approvers: 'Lead'
    }];
    this.showDiv = true;
  }
  cancel() {
    this.showDiv = true;
  }
  editSkillSetData (skillSetData) {
    this.showDiv = false;
    this.skillSetObj = {
      type: this.skillTypes[1].value,
      skill: skillSetData.skills
    };
  }
}
