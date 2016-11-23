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
    todayDate: any;
    experienceForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder) {
        this.showDiv = true;
        this.todayDate = moment().format('dd/mm/yyyy');;
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
        //TODO :Edit Functinality
        // var experienceData = _.find(this.experience, ['id', value.id]);
        // if (experienceData) {
        //     experienceData.project = value.project,
        //     experienceData.client = value.client,
        //     experienceData.startDate = value.startDate,
        //     experienceData.endDate = value.endDate,
        //     experienceData.role = value.role,
        //     experienceData.environment = value.environment,
        //     experienceData.responsibilites = value.responsibilites,
        //     experienceData.description = value.description,
        //     experienceData.currentProject =value.currentProject;
        // } else {
        //   this.experience.push({
        //     id: this.experience.length + 1,
        //     project: value.project,
        //     client: value.client,
        //     startDate: value.startDate,
        //     endDate: value.endDate,
        //     role: value.role,
        //     environment: value.environment,
        //     responsibilites: value.responsibilites,
        //     description: value.description,
        //      currentProject: value.currentProject,
        //     duration: '8 years',       
        //     status: 'status',
        //     comment: 'Comment'
        //   });
        // }

        this.experience = [{
            id: this.experience.length + 1,
            project: value.project,
            client: value.client,
            startDate: value.startDate,
            endDate: value.endDate,
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
    submit() {
        this.experience = [{
            id: 1,
            project: 'ssc',
            client: 'ssc',
            startDate: '12/12/2012',
            endDate: '12/12/2020',
            role: '2000',
            environment: '',
            duration: '8 years',
            status: 'status',
            currentProject: true,
            comment: 'Comment',
            responsibilites: '',
            description: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
        this.experienceForm.reset();
    }
    editExperienceData(experienceData) {
        this.showDiv = false;
        this.experienceForm.setValue({
            id: experienceData.id,
            project: experienceData.project,
            client: experienceData.client,
            startDate: experienceData.startDate,
            endDate: experienceData.endDate,
            role: experienceData.role,
            environment: experienceData.environment,
            responsibilites: experienceData.responsibilites,
            description: experienceData.description,
            currentProject: experienceData.currentProject
        });
    }
}
