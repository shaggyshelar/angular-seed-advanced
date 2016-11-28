/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Module Level Dependencies */
import { PROFILE_ACTIONS } from '../../services/profile.actions';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';
/** Module Level Dependencies */
import { Skill } from '../../models/skill';

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
  skillSet: Skill[];
  skillTypes: SelectItem[];
  showDiv: boolean;
  skillSetForm: FormGroup;
  public profile_Observable: Observable<any>;

  constructor(
    private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
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

    let ProfileID = 1;
    this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_SKILLS, payload: ProfileID });
    this.profile_Observable = this.store.select('profile');
    this.profile_Observable.subscribe(res => {
      this.skillSet = res ? res.skills : [];
      console.log('SKills', this.skillSet);
    });
  }

  onAddClick() {
    this.showDiv = false;
    this.skillSetForm.reset();
  }

  onSubmit({ value, valid }: { value: SkillSetForm, valid: boolean }) {
    var skillSetData = _.find(this.skillSet, ['ID', value.id]);
    if (skillSetData) {
      skillSetData.Type = value.skillType.name;
      skillSetData.Description = value.skills;
    } else {
      this.skillSet.push({
        ID: this.skillSet.length + 1,
        Type: value.skillType.name,
        Description: value.skills,
        Status: 'status',
        Comments: 'Comment',
        Approvers: 'Lead'
      });
    }
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
