/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Module Level Dependencies */
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';
import { MessageService } from '../../../../core/shared/services/message.service';
/** Third Party Dependencies */

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
    params: Params;
    ticketForm: FormGroup;
    constructor(
        private messageService: MessageService,
        private formBuilder: FormBuilder,
        private ticketService: TicketService,
        private route: ActivatedRoute,
        private router: Router) {
    }
    ngOnInit(): void {
        this.ticketForm = this.formBuilder.group({
            Id: [null],
            Department: ['', [Validators.required]],
            Priority: ['', [Validators.required]],
            Concern: ['', [Validators.required]],
            Description: ['', [Validators.required]],
        });
        this.departments = [];
        this.departments.push({ label: 'Select Department', value: null });
        this.departments.push({ label: 'IT', value: 'IT' });
        this.departments.push({ label: 'Admin', value: 'Admin' });
        this.departments.push({ label: 'Abc', value: 'Abc' });

        this.priorities = [];
        this.priorities.push({ label: 'Select Priority', value: null });
        this.priorities.push({ label: 'Low', value: 'Low' });
        this.priorities.push({ label: 'High', value: 'High' });
        this.priorities.push({ label: 'Abc', value: 'Abc' });

        this.concerns = [];
        this.concerns.push({ label: 'Select Concerns', value: null });
        this.concerns.push({ label: 'Soft install', value: 'Soft install' });
        this.concerns.push({ label: 'Hardware req', value: 'Hardware req' });
        this.concerns.push({ label: 'Abc', value: 'Abc' });
        this.route.params.forEach((params: Params) => {
            if (params['id']) {
                this.params = params['id'];
                this.ticketService.getTicketById(this.params).subscribe(result => {
                    if (result) {
                        this.ticketForm.setValue({
                            Id: result.Id,
                            Department: result.Department,
                            Priority: result.Priority,
                            Concern: result.Concern,
                            Description: result.Description,
                        });
                    }
                });
            }
        });
    }

    onSubmit({ value, valid }: { value: Ticket, valid: boolean }) {
        if (this.params) {
            this.ticketService.editTicket(value).subscribe(result => {
                if (result) {
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Ticket Edit' });
                    this.router.navigate(['/corporate/log-ticket']);
                }
            });
        } else {
            this.ticketService.saveTicket(value).subscribe(result => {
                if (result) {
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Ticket Logged' });
                    this.router.navigate(['/corporate/log-ticket']);
                }
            });
        }
    }

    cancel() {
        this.router.navigate(['/corporate/log-ticket']);
    }
}
