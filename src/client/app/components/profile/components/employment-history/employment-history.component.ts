/** Angular Dependencies */

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'employment-history',
    templateUrl: 'employment-history.component.html',
    styleUrls: ['employment-history.component.css']
})
export class EmploymentHistoryComponent {
    employmentHistory: any[];
    lastEmployerDetails: any[];
    showDiv: boolean;
    showEmployerDiv: boolean;
    employmentHistoryObj: any;

    constructor() {
        this.employmentHistory = [];
        this.lastEmployerDetails = [];
        this.showDiv = true;
        this.showEmployerDiv = true;
        this.employmentHistoryObj = {};
    }

    onAddClick() {
        this.showDiv = false;
        this.employmentHistoryObj = {};
    }
    submit() {
        this.employmentHistory = [{
            id: 1,
            employementDetails: 'details1',
            designation: 'Developer',
            startDate: '10/11/2013',
            endDate: '10/11/2017',
            duration: '11 Months',
            status: 'pending for approval',
            comment: ''
        }];
        this.showDiv = true;
    }
    cancel() {
        this.showDiv = true;
    }

    addLastEmployer() {
        this.showEmployerDiv = false;
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
        this.employmentHistoryObj = {
            employementDetails: employmentHistoryData.employementDetails,
            designation: employmentHistoryData.designation,
            startDate: employmentHistoryData.startDate,
            endDate: employmentHistoryData.endDate
        };
    }
}
