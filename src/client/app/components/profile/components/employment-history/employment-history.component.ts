/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

/** Module Level Dependencies */

/** Other Module Dependencies */
import * as moment from 'moment/moment';

export interface EmploymentHistoryForm {
    id: number;
    employementDetails: string;
    designation: string;
    startDate: string;
    endDate: string;
}

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'employment-history',
    templateUrl: 'employment-history.component.html',
    styleUrls: ['employment-history.component.css']
})
export class EmploymentHistoryComponent implements OnInit {
    employmentHistory: any[];
    lastEmployerDetails: any[];
    showDiv: boolean;
    showEmployerDiv: boolean;
    employmentHistoryForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.employmentHistory = [];
        this.lastEmployerDetails = [];
        this.showDiv = true;
        this.showEmployerDiv = true;
    }

    ngOnInit(): void {
        this.employmentHistoryForm = this.formBuilder.group({
            id: [''],
            employementDetails: ['', [Validators.required]],
            designation: ['', [Validators.required]],
            startDate: ['', [Validators.required]],
            endDate: ['', [Validators.required]]
        });
    }

    onAddClick() {
        this.showDiv = false;
        this.employmentHistoryForm.reset();
    }

    onSubmit({ value, valid }: { value: EmploymentHistoryForm, valid: boolean }) {
        this.employmentHistory = [{
            id: this.employmentHistory.length + 1,
            employementDetails: value.employementDetails,
            designation: value.designation,
            startDate: moment(value.startDate).format('DD/MM/YYYY'),
            endDate: moment(value.endDate).format('DD/MM/YYYY'),
            duration: '11 Months',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }

    cancel() {
        this.showDiv = true;
        this.employmentHistoryForm.reset();
    }

    addLastEmployer() {
        this.showEmployerDiv = false;
        this.employmentHistoryForm.reset();
    }

    submitLastEmployer() {
        this.lastEmployerDetails = [{
            id: 1,
            firstMonth: '',
            secondMonth: '',
            thirdDate: '',
            expLetterOne: '',
            expLetterSecond: '',
            status: 'pending for approval',
            hrComments: ''
        }];
        this.showEmployerDiv = true;
    }
    cancelLastEmployer() {
        this.showEmployerDiv = true;
    }
    editEmploymentHistory(employmentHistoryData) {
        this.showDiv = false;
        var startDate = employmentHistoryData.startDate.split('/');
        var endDate = employmentHistoryData.endDate.split('/');
        this.employmentHistoryForm.setValue({
            id: employmentHistoryData.id,
            employementDetails: employmentHistoryData.employementDetails,
            designation: employmentHistoryData.designation,
            startDate: new Date(startDate[2] + '-' + startDate[1] + '-' + startDate[0]),
            endDate: new Date(endDate[2] + '-' + endDate[1] + '-' + endDate[0])
        });
    }
}
