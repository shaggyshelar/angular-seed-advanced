/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';
/** Module Level Dependencies */
import { Skill } from '../../models/skill';
import { SkillService } from '../../services/skill.service';

/** Other Module Dependencies */
import * as _ from 'lodash';

export interface Select {
  id: number;
  name: string;
};

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
  public skillSet: Observable<Skill>;
  skillTypes: SelectItem[];
  showDiv: boolean;
  skillSetForm: FormGroup;

  constructor(
    private router: Router, private formBuilder: FormBuilder, private skillService: SkillService) {
    this.skillTypes = [];
    this.showDiv = true;
  }

  ngOnInit(): void {
    this.skillTypes.push({ label: 'Select Skill Type', value: null });
    this.skillTypes.push({ label: 'Language/Technology', value: { id: 1, name: 'Language/Technology' } });
    this.skillTypes.push({ label: 'Database', value: { id: 2, name: 'Database' } });

    this.skillSetForm = this.formBuilder.group({
      id: [null],
      skillType: ['', [Validators.required]],
      skills: ['', [Validators.required]]
    });

    this.skillSet = this.skillService.getSkills();
  }

  onAddClick() {
    this.showDiv = false;
    this.skillSetForm.reset();
  }

  onSubmit({ value, valid }: { value: SkillSetForm, valid: boolean }) {
    if (value.id) {
      let params = {
        ID: value.id,
        Name: value.skills,
        Type: value.skillType.name
      };
      this.skillService.updateSkill(value.id, params).subscribe(res => {
        if (res) {
          this.skillSet = this.skillService.getSkills();
          this.showDiv = true;
        }
      });
    } else {
      let params = {
        Name: value.skills,
        Type: value.skillType.name
      };
      this.skillService.addSkill(params).subscribe(res => {
        if (res) {
          this.skillSet = this.skillService.getSkills();
          this.showDiv = true;
        }
      });
    }
  }

  cancel() {
    this.showDiv = true;
    this.skillSetForm.reset();
  }
  editSkillSetData(skillSetData) {
    this.showDiv = false;
    this.skillSetForm.setValue({
      id: skillSetData.ID,
      skillType: _.find(this.skillTypes, ['label', skillSetData.Type.Name]).value,
      skills: skillSetData.Name
    });
  }
}
