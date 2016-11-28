import { Routes } from '@angular/router';
import { ConferenceComponent } from './components/conference-booking/conference/conference.component';
import { BookComponent } from './components/conference-booking/book-conference/book-conference.component';
import { MyBookingComponent } from './components/conference-booking/my-booking/my-booking.component';
import { LogTicketComponent } from './components/ticket/log-ticket/log-ticket.component';
import { ManageTicketComponent } from './components/ticket/manage-ticket/manage-ticket.component';

export const CorporateRoutes: Routes = [
  {
    path: '',
    redirectTo: 'conferenceBooking',
    pathMatch: 'full'
  },
  {
    path: 'manage-ticket',
    component: ManageTicketComponent,
  },
  {
    path: 'manage-ticket/:id',
    component: ManageTicketComponent,
  },
  {
    path: 'log-ticket',
    component: LogTicketComponent,

  },
  {
    path: 'conferenceBooking/:room',
    component: ConferenceComponent,

  },
  {
    path: 'conferenceBooking',
    component: ConferenceComponent,

  },
  {
    path: 'newBooking',
    component: BookComponent,
  },
  {
    path: 'myBookings',
    component: MyBookingComponent,
  }
];
