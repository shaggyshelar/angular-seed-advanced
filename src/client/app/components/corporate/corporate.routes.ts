import { Route } from '@angular/router';
import { ConferenceComponent } from './components/conference-booking/conference/conference.component';
import { BookComponent } from './components/conference-booking/book-conference/book-conference.component';
import { MyBookingComponent } from './components/conference-booking/my-booking/my-booking.component';
import { LogTicketComponent } from './components/ticket/log-ticket/log-ticket.component';
import { ManageTicketComponent } from './components/ticket/manage-ticket/manage-ticket.component';

export const CorporateRoutes: Route[] = [
  {
    path: 'manage-ticket',
    component: ManageTicketComponent,
    data: {
      permissions: ['Ticket.READ']
    }
  },
  {
    path: 'log-ticket',
    component: LogTicketComponent,
    data: {
      permissions: ['Ticket.READ']
    }
  },
  {
    path: 'conferenceBooking/:room',
    component: ConferenceComponent,
    data: {
      permissions: ['ConferenceBook.READ']
    }
  },
  {
    path: 'conferenceBooking',
    component: ConferenceComponent,
    data: {
      permissions: ['ConferenceBook.READ']
    }
  },
  {
    path: 'newBooking',
    component: BookComponent,
    data: {
      permissions: ['ConferenceBook.CREATE']
    }
  },
  {
    path: 'myBookings',
    component: MyBookingComponent,
     data: {
      permissions: ['ConferenceBook.DELETE']
    }
  }
];
