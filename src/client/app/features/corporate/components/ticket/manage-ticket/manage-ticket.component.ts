/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Module Level Dependencies */
import { Ticket } from '../../../models/ticket';
import { CORPORATE_ACTIONS } from '../../../services/corporate.actions';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'manage-ticket',
    templateUrl: 'manage-ticket.component.html'
})
export class ManageTicketComponent implements OnInit {
    departments: SelectItem[];
    priorities: SelectItem[];
    concerns: SelectItem[];
    ticketModel: Ticket;
    params: Params;
    constructor(
        private route: ActivatedRoute,
        private store: Store<any>,
        private router: Router) {
        this.ticketModel = new Ticket('', '', '', '', '', '', '', '', '', '', '', '');
    }
    ngOnInit(): void {

        this.departments = [];
        this.departments.push({ label: 'Select Department', value: null });
        this.departments.push({ label: 'IT', value: 'project1' });
        this.departments.push({ label: 'Admin', value: 'project2' });

        this.priorities = [];
        this.priorities.push({ label: 'Select Priority', value: null });
        this.priorities.push({ label: 'Low', value: 'Low' });
        this.priorities.push({ label: 'High', value: 'High' });

        this.concerns = [];
        this.concerns.push({ label: 'Select Concerns', value: null });
        this.concerns.push({ label: 'Soft install', value: 'Soft install' });
        this.concerns.push({ label: 'Hardware req', value: 'Hardware req' });
        this.route.params.forEach((params: Params) => {
            if (params['id']) {
                this.params = params['id'];
                this.store.dispatch({ type: CORPORATE_ACTIONS.TICKET_GET, payload: this.params });
                this.store.select('corporate').subscribe((res: any) => {
                    if (res && res.selectedTicket) {
                        this.ticketModel = res.selectedTicket;
                    }
                });
            }
        });
    }

    save() {
        if(this.params){
            this.store.dispatch({ type: CORPORATE_ACTIONS.TICKET_EDIT , payload: this.ticketModel });
        } else{
            this.store.dispatch({ type: CORPORATE_ACTIONS.TICKET_ADD, payload: this.ticketModel });
        }
    }

    cancel() {
        this.router.navigate(['/app/corporate/log-ticket']);
    }
}
