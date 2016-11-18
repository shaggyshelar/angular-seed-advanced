/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */
import { Experience } from '../../entity/experience';

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[];
  showDiv: boolean;
  experienceObj: any;

  constructor(
    private router: Router) {
    this.showDiv = true;
    this.experienceObj = {};
  }

  ngOnInit(): void {
    this.experience = [];
  }

  onAddClick() {
    this.showDiv = false;
    this.experienceObj = {};
  }
  submit() {
    this.experience = [{
      id: 1,
      project: 'ssc',
      client: 'ssc',
      startDate: '12/12/2012',
      endDate: '12/12/2020',
      role: '2000',
      environment: '',
      responsibilites: 'status',
      description: 'hr Comment'
    }];
    this.showDiv = true;
  }
  cancel() {
    this.showDiv = true;
  }
  editExperienceData(experienceData) {
    this.showDiv = false;
    this.experienceObj = {
      project: experienceData.project,
      client: experienceData.client,
      startDate: experienceData.startDate,
      endDate: experienceData.endDate,
      role: experienceData.role,
      environment: experienceData.environment,
      responsibilites: experienceData.responsibilites,
      description: experienceData.description
    };
  }
}
