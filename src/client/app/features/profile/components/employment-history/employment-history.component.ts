/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Framework Level Dependencies */
import { BaseComponent } from '../../../framework.ref';

/** Module Level Dependencies */
import { EmploymentHistoryService } from '../../services/employmentHistory.service';
import { EmploymentHistory } from '../../models/employmentHistory';

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
    public employmentHistory: Observable<EmploymentHistory>;
    lastEmployerDetails: any[];
    showDiv: boolean;
    showEmployerDiv: boolean;
    employmentHistoryForm: FormGroup;
    public profile_Observable: Observable<any>;

    constructor(private formBuilder: FormBuilder, private employmentHistoryService: EmploymentHistoryService) {
        this.lastEmployerDetails = [];
        this.showDiv = true;
        this.showEmployerDiv = true;
    }

    ngOnInit(): void {
        // let ProfileID = 1;
        // this.store.dispatch({ type: PROFILE_ACTIONS.INITIALIZE_GET_EMPLOYMENT_HISTORY, payload: ProfileID });
        // this.profile_Observable = this.store.select('profile');
        // this.profile_Observable.subscribe(res => {
        //     this.employmentHistory = res && res.employmentHistory ? res.employmentHistory : [];
        //     console.log('EmploymentHistory', this.employmentHistory);
        // });
        this.employmentHistory = this.employmentHistoryService.getEmploymentHistory();

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

        if (value.id) {
            let params = {
                ID: value.id,
                EmploymentDetail: value.employementDetails,
                Designation: value.designation,
                StartDate: moment(value.startDate).format('DD/MM/YYYY'),
                EndDate: moment(value.endDate).format('DD/MM/YYYY')
            };
            this.employmentHistoryService.updateEmploymentHistory(value.id, params).subscribe(res => {
                if (res) {
                    this.employmentHistory = this.employmentHistoryService.getEmploymentHistory();
                    this.showDiv = true;
                }
            });
        } else {
            let params = {
                EmploymentDetail: value.employementDetails,
                Designation: value.designation,
                StartDate: moment(value.startDate).format('DD/MM/YYYY'),
                EndDate: moment(value.endDate).format('DD/MM/YYYY')
            };
            this.employmentHistoryService.addEmploymentHistory(params).subscribe(res => {
                if (res) {
                    this.employmentHistory = this.employmentHistoryService.getEmploymentHistory();
                    this.showDiv = true;
                }
            });
        }
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
        var startDate = employmentHistoryData.StartDate.split('/');
        var endDate = employmentHistoryData.EndDate.split('/');
        this.employmentHistoryForm.setValue({
            id: employmentHistoryData.ID,
            employementDetails: employmentHistoryData.EmploymentDetail,
            designation: employmentHistoryData.Designation,
            startDate: new Date(startDate[2] + '-' + startDate[1] + '-' + startDate[0]),
            endDate: new Date(endDate[2] + '-' + endDate[1] + '-' + endDate[0])
        });
    }
}
