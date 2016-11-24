/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';
/** Module Level Dependencies */
import { SkillSet } from '../../entity/skill-set';

/** Other Module Dependencies */
import * as _ from 'lodash';

export interface Select {
  id: number;
  name: string;
}

export interface SkillSetForm {
  id: number;
  skillType: Select;
  skills: string;
}

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
  skillSetForm: FormGroup;

  constructor(
    private router: Router, private formBuilder: FormBuilder) {
    this.skillTypes = [];
    this.showDiv = true;
  }

  ngOnInit(): void {
    this.skillSet = [];
    this.skillTypes.push({ label: 'Select Skill Type', value: null });
    this.skillTypes.push({ label: 'Language/Technology', value: { id: 1, name: 'Language/Technology' } });
    this.skillTypes.push({ label: 'Database', value: { id: 2, name: 'Database' } });

    this.skillSetForm = this.formBuilder.group({
      id: [null],
      skillType: ['', [Validators.required]],
      skills: ['', [Validators.required]]
    });
  }

  onAddClick() {
    this.showDiv = false;
    this.skillSetForm.reset();
  }

  onSubmit({ value, valid }: { value: SkillSetForm, valid: boolean }) {
    var skillSetData = _.find(this.skillSet, ['id', value.id]);
    if (skillSetData) {
      skillSetData.skillType = value.skillType.name;
      skillSetData.skills = value.skills;
    } else {
      this.skillSet.push({
        id: this.skillSet.length + 1,
        skillType: value.skillType.name,
        skills: value.skills,
        status: 'status',
        comments: 'Comment',
        approvers: 'Lead'
      });
    }
    this.showDiv = true;
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
    this.skillSetForm.reset();
  }
  editSkillSetData(skillSetData) {
    this.showDiv = false;
    this.skillSetForm.setValue({
      id: skillSetData.id,
      skillType: _.find(this.skillTypes, ['label', skillSetData.skillType]).value,
      skills: skillSetData.skills
    });
  }
}
