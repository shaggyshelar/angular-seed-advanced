/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { Ticket } from '../../../models/ticket';
import { CORPORATE_ACTIONS } from '../../../services/corporate.actions';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';

import { MenuItem } from 'primeng/primeng';
/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'log-ticket',
  templateUrl: 'log-ticket.component.html',
  styleUrls: ['log-ticket.component.css']
})
export class LogTicketComponent implements OnInit {
  ticket: any; //Ticket[];
  private items: MenuItem[];
  constructor(
    private router: Router,
    private store: Store<any>) {
  }

  ngOnInit(): void {
    this.ticket = [];
    this.store.dispatch({ type: CORPORATE_ACTIONS.TICKET_INIT });
    this.store.select('corporate').subscribe((res: any) => {
      if (res) {
        this.ticket = res.tickets;
      }
    }
    );
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

  }

  newTicket() {
    this.router.navigate(['/app/corporate/manage-ticket']);
  }

  selectTicket(ticket: Ticket) {
    this.router.navigate(['/app/corporate/manage-ticket']);
  }

}
