/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Module Level Dependencies */
import { Experience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';

/** Other Module Dependencies */
// import * as _ from 'lodash';
import * as moment from 'moment/moment';

export interface ExperienceForm {
    id: number;
    project: string;
    client: string;
    startDate: string;
    endDate: string;
    role: string;
    environment: string;
    responsibilites: string;
    description: string;
    isCurrentProject: boolean;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'experience',
    templateUrl: 'experience.component.html',
    styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experience: Observable<Experience>;
    showDiv: boolean;
    experienceForm: FormGroup;
    public profile_Observable: Observable<any>;

    constructor(
        private formBuilder: FormBuilder, private experienceService: ExperienceService) {
        this.showDiv = true;
    }

    ngOnInit(): void {
        this.experienceForm = this.formBuilder.group({
            id: [null],
            project: ['', [Validators.required]],
            client: ['', [Validators.required]],
            startDate: ['', [Validators.required]],
            endDate: ['', [Validators.required]],
            role: ['', [Validators.required]],
            environment: [''],
            responsibilites: ['', [Validators.required]],
            description: [''],
            isCurrentProject: [''],
        });

        this.experience = this.experienceService.getExperience();
    }

    onAddClick() {
        this.showDiv = false;
        this.experienceForm.reset();
    }

    onSubmit({ value, valid }: { value: ExperienceForm, valid: boolean }) {
        if (value.id) {
            let params = {
                ID: value.id,
                Project: value.project,
                Client: value.client,
                StartDate: moment(value.startDate).format('DD/MM/YYYY'),
                EndDate: moment(value.endDate).format('DD/MM/YYYY'),
                Role: value.role,
                Environment: value.environment,
                Responsibilites: value.responsibilites,
                Description: value.description,
                IsCurrentProject: value.isCurrentProject,
            };
            this.experienceService.updateExperience(value.id, params).subscribe(res => {
                if (res) {
                    this.experience = this.experienceService.getExperience();
                    this.showDiv = true;
                }
            });
        } else {
            let params = {
                Project: value.project,
                Client: value.client,
                StartDate: moment(value.startDate).format('DD/MM/YYYY'),
                EndDate: moment(value.endDate).format('DD/MM/YYYY'),
                Role: value.role,
                Environment: value.environment,
                Responsibilites: value.responsibilites,
                Description: value.description,
                IsCurrentProject: value.isCurrentProject,
            };
            this.experienceService.addExperience(params).subscribe(res => {
                if (res) {
                    this.experience = this.experienceService.getExperience();
                    this.showDiv = true;
                }
            });
        }
    }

    cancel() {
        this.showDiv = true;
        this.experienceForm.reset();
    }
    editExperienceData(experienceData) {
        this.showDiv = false;
        var startDate = experienceData.StartDate.split('/');
        var endDate = experienceData.EndDate.split('/');
        this.experienceForm.setValue({
            id: experienceData.ID,
            project: experienceData.Project.Name,
            client: experienceData.Client.Name,
            startDate: new Date(startDate[2] + '-' + startDate[1] + '-' + startDate[0]),
            endDate: new Date(endDate[2] + '-' + endDate[1] + '-' + endDate[0]),
            role: experienceData.Role,
            environment: experienceData.Environment,
            responsibilites: experienceData.Responsibilites,
            description: experienceData.Description,
            isCurrentProject: experienceData.IsCurrentProject
        });
    }
}
