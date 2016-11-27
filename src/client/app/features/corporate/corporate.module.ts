
/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Third Party Dependencies */
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer } from '@ngrx/store';

/** Module Level Dependencies */
// Components Declarations
import { CommonModule, TranslateModule } from '../core/index';
import { ConferenceComponent } from './components/conference-booking/conference/conference.component';
import { BookComponent } from './components/conference-booking/book-conference/book-conference.component';
import { MyBookingComponent } from './components/conference-booking/my-booking/my-booking.component';
import { LogTicketComponent } from './components/ticket/log-ticket/log-ticket.component';
import { ManageTicketComponent } from './components/ticket/manage-ticket/manage-ticket.component';
//import { CorporateRoutingModule } from './corporate.routes';
// Services Delarations
import { ConferenceBookingService } from './services/conference-booking/conference-booking.service';
import { TicketService } from './services/ticket/ticket.service';
import { ConferenceBookingEffects } from './services/conference-booking/conference-booking.effects';
import { TicketEffects } from './services/ticket/ticket.effects';
import { CorporateReducer } from './services/corporate.reducer';

/** Module Definition */
@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        EffectsModule.run(ConferenceBookingEffects),
        EffectsModule.run(TicketEffects),
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
    static reducers(): { [key: string]: ActionReducer<any> } {
        return { corporate: CorporateReducer };
    }
}
