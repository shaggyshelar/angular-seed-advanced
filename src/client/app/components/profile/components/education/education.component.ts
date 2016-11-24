/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Module Level Dependencies */

/** Other Module Dependencies */
import * as _ from 'lodash';

export interface Select {
    id: number;
    name: string;
};

export interface EducationForm {
    id: number;
    degree: string;
    percentage: string;
    yearOfPassing: string;
    class: Select;
    grade: Select;
}


/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'education',
    templateUrl: 'education.component.html',
    styleUrls: ['education.component.css']
})
export class EducationComponent implements OnInit {
    education: any[];
    class: SelectItem[];
    grade: SelectItem[];
    showDiv: boolean;
    educationObj: any;
    educationForm: FormGroup;

    constructor(
        private router: Router, private formBuilder: FormBuilder) {
        this.education = [];
        this.class = [];
        this.grade = [];
        this.showDiv = true;
        this.educationObj = {};
    }

    ngOnInit(): void {
        this.class.push({ label: 'Select Class', value: null });
        this.class.push({ label: 'SSC', value: { id: 1, name: 'SSC' } });
        this.class.push({ label: 'HSC', value: { id: 2, name: 'HSC' } });
        this.class.push({ label: 'Diploma', value: { id: 3, name: 'Diploma' } });
        this.class.push({ label: 'Graduation', value: { id: 4, name: 'Graduation' } });
        this.class.push({ label: 'Post-Graduation', value: { id: 5, name: 'Post-Graduation' } });

        this.grade.push({ label: 'Select Grade', value: null });
        this.grade.push({ label: 'Distinction', value: { id: 1, name: 'Distinction' } });
        this.grade.push({ label: 'First Class', value: { id: 2, name: 'First Class' } });
        this.grade.push({ label: 'Second Class', value: { id: 3, name: 'Second Class' } });
        this.grade.push({ label: 'Pass', value: { id: 4, name: 'Pass' } });

        this.educationForm = this.formBuilder.group({
            id: [''],
            degree: ['', [Validators.required, Validators.minLength(2)]],
            class: ['', [Validators.required]],
            grade: ['', [Validators.required]],
            percentage: ['', [Validators.required, Validators.minLength(2)]],
            yearOfPassing: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    onSubmit({ value, valid }: { value: EducationForm, valid: boolean }) {
        this.education = [{
            id: this.education.length + 1,
            class: value.class.name,
            degree: value.degree,
            grade: value.grade.name,
            percentage: value.percentage,
            yearOfPassing: value.yearOfPassing,
            certificate: '',
            status: 'status',
            hrComment: 'hr Comment'
        }];
        this.showDiv = true;
    }

    onFileSelect(event) {
        console.log('event', event);
    }

    onAddClick() {
        this.showDiv = false;
        this.educationForm.reset();
    }

    cancel() {
        this.showDiv = true;
        this.educationForm.reset();
    }
    editEducation(educationData) {
        this.showDiv = false;
        this.educationForm.setValue({
            id: educationData.id,
            degree: educationData.degree,
            class: _.find(this.class, ['label', educationData.class]).value,
            grade: _.find(this.grade, ['label', educationData.grade]).value,
            yearOfPassing: educationData.yearOfPassing,
            percentage: educationData.percentage
        });
    }

    onChange(event) {
        var files = event.srcElement.files;
        console.log(files);
    }
}
