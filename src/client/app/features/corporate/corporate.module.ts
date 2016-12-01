
/** Angular Dependencies */
import { NgModule } from '@angular/core';


/** Module Level Dependencies */
// Components Declarations
import { CommonModule, TranslateModule } from '../core/index';
import { ConferenceComponent } from './components/conference-booking/conference/conference.component';
import { BookComponent } from './components/conference-booking/book-conference/book-conference.component';
import { MyBookingComponent } from './components/conference-booking/my-booking/my-booking.component';
import { LogTicketComponent } from './components/ticket/log-ticket/log-ticket.component';
import { ManageTicketComponent } from './components/ticket/manage-ticket/manage-ticket.component';
// Services Delarations
import { ConferenceBookingService } from './services/conference-booking.service';
import { TicketService } from './services/ticket.service';

/** Module Definition */
@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
    ],
    exports: [],
    declarations: [
        ConferenceComponent,
        BookComponent,
        MyBookingComponent,
        LogTicketComponent,
        ManageTicketComponent
    ],
    providers: [ConferenceBookingService,TicketService],
})
export class CorporateModule {
}
