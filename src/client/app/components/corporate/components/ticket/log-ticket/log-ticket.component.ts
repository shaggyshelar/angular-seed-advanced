/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Module Level Dependencies */
import { Ticket } from '../../../entity/ticket';

import { MenuItem } from 'primeng/primeng';
/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'log-ticket',
  templateUrl: 'log-ticket.component.html',
  styleUrls: ['log-ticket.component.css']
})
export class LogTicketComponent implements OnInit {
  ticket: Ticket[];
  private items: MenuItem[];
  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Edit',
        icon: 'fa-edit',
      },
      {
        label: 'Reply',
        icon: 'fa-reply',
      },
      {
        label: 'Close',
        icon: 'fa-times',
      },
      {
        label: 'Reopen',
        icon: 'fa-retweet',
      }
    ];

    this.ticket = [{
      id: 1,
      ticket: '',
      department: 'IT',
      concern: 'Abc',
      description: 'Abc',
      status: 'Abc',
      priority: 'Abc',
      updatedBy: 'Abc',
      resolvedBy: 'Abc',
      createdDate: '20-11-2018',
      updatedDate: '25-11-2018',
      ageDays: 10
    },
    {
      id: 2,
      ticket: '',
      department: 'IT',
      concern: 'Abc',
      description: 'Abc',
      status: 'Abc',
      priority: 'Abc',
      updatedBy: 'Abc',
      resolvedBy: 'Abc',
      createdDate: '20-11-2018',
      updatedDate: '25-11-2018',
      ageDays: 10
    }, {
      id: 3,
      ticket: '',
      department: 'IT',
      concern: 'Abc',
      description: 'Abc',
      status: 'Abc',
      priority: 'Abc',
      updatedBy: 'Abc',
      resolvedBy: 'Abc',
      createdDate: '20-11-2018',
      updatedDate: '25-11-2018',
      ageDays: 10
    }, {
      id: 4,
      ticket: '',
      department: 'IT',
      concern: 'Abc',
      description: 'Abc',
      status: 'Abc',
      priority: 'Abc',
      updatedBy: 'Abc',
      resolvedBy: 'Abc',
      createdDate: '20-11-2018',
      updatedDate: '25-11-2018',
      ageDays: 10
    }, {
      id: 5,
      ticket: '',
      department: 'IT',
      concern: 'Abc',
      description: 'Abc',
      status: 'Abc',
      priority: 'Abc',
      updatedBy: 'Abc',
      resolvedBy: 'Abc',
      createdDate: '20-11-2018',
      updatedDate: '25-11-2018',
      ageDays: 10
    }, {
      id: 6,
      ticket: '',
      department: 'IT',
      concern: 'Abc',
      description: 'Abc',
      status: 'Abc',
      priority: 'Abc',
      updatedBy: 'Abc',
      resolvedBy: 'Abc',
      createdDate: '20-11-2018',
      updatedDate: '25-11-2018',
      ageDays: 10
    }
    ];
  }

  newTicket() {
    this.router.navigate(['/manage-ticket']);
  }

  selectTicket(ticket: Ticket) {
    this.router.navigate(['/manage-ticket']);
  }

}
