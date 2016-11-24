/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */
import { Experience } from '../../entity/experience';

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
    currentProject: boolean;
}

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
    experienceForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder) {
        this.showDiv = true;
    }

    ngOnInit(): void {
        this.experience = [];
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
            currentProject: [''],
        });
    }

    onAddClick() {
        this.showDiv = false;
        this.experienceForm.reset();
    }

    onSubmit({ value, valid }: { value: ExperienceForm, valid: boolean }) {


        this.experience = [{
            id: this.experience.length + 1,
            project: value.project,
            client: value.client,
            startDate: moment(value.startDate).format('DD/MM/YYYY'),
            endDate: moment(value.endDate).format('DD/MM/YYYY'),
            role: value.role,
            environment: value.environment,
            responsibilites: value.responsibilites,
            description: value.description,
            currentProject: value.currentProject,
            duration: '8 years',
            status: 'status',
            comment: 'Comment'
        }];
        this.showDiv = true;
    }

    cancel() {
        this.showDiv = true;
        this.experienceForm.reset();
    }
    editExperienceData(experienceData) {
        this.showDiv = false;
        var startDate = experienceData.startDate.split('/');
        var endDate = experienceData.endDate.split('/');
        this.experienceForm.setValue({
            id: experienceData.id,
            project: experienceData.project,
            client: experienceData.client,
            startDate: new Date(startDate[2] + '-' + startDate[1] + '-' + startDate[0]),
            endDate: new Date(endDate[2] + '-' + endDate[1] + '-' + endDate[0]),
            role: experienceData.role,
            environment: experienceData.environment,
            responsibilites: experienceData.responsibilites,
            description: experienceData.description,
            currentProject: experienceData.currentProject
        });
    }
}
