/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Module Level Dependencies */

export interface EducationForm {
    degree: string;
    percentage: string;
    yearOfPassing: string;
    class: string;
    grade: string;
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
            degree: ['', [Validators.required, Validators.minLength(2)]],
            class: ['', [Validators.required]],
            grade: ['', [Validators.required]],
            percentage: ['', [Validators.required, Validators.minLength(2)]],
            yearOfPassing: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    onSubmit({ value, valid }: { value: EducationForm, valid: boolean }) {
        console.log(value, valid);
    }

    onFileSelect(event) {
        console.log('event', event);
    }

    onAddClick() {
        this.showDiv = false;
        this.educationObj = {};
    }
    submit() {
        this.education = [{
            id: 1,
            class: 'ssc',
            degree: 'ssc',
            grade: 'distiction',
            percentage: '90',
            yearOfPassing: '2000',
            certificate: '',
            status: 'status',
            hrComment: 'hr Comment'
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }
    editEducation(educationData) {
        this.showDiv = false;
        this.educationObj = {
            class: this.class[1].value,
            degree: educationData.degree,
            grade: this.grade[1].value,
            percentage: educationData.percentage,
            yearOfPassing: educationData.yearOfPassing,
            certificate: educationData.certificate
        };
    }
}
