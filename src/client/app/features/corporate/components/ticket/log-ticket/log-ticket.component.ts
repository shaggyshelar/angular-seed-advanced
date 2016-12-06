/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

/** Module Level Dependencies */
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import { MenuItem } from 'primeng/primeng';

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'log-ticket',
  templateUrl: 'log-ticket.component.html',
  styleUrls: ['log-ticket.component.css']
})
export class LogTicketComponent implements OnInit {
  ticket: Observable<Ticket[]>;
  private items: MenuItem[];
  constructor(
    private ticketService: TicketService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.ticket = this.ticketService.getTicketList();
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
    this.router.navigate(['/corporate/manage-ticket']);
  }

  selectTicket(ticket: Ticket) {
    this.router.navigate(['/corporate/manage-ticket']);
  }

  editTicket(ticket) {
    this.router.navigate(['/corporate/manage-ticket', ticket.Id]);
  }
}
