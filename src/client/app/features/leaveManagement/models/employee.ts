/** Employee Model definition */
export interface Employee {
    id: number;
    employee: string;
    approverUser: string;
    pendingApprover: string;
    startDate: string;
    endDate: string;
    status: string;
    numDays: number;
    reason:string;
}
