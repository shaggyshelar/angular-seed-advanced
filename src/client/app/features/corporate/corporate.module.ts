
/** Angular Dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

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


/** Module Definition */
@NgModule({
    imports: [
        RouterModule,FormsModule,BrowserModule,CommonModule,TranslateModule 
       // EffectsModule.run(TimesheetEffects)
    ],
    exports: [],
    declarations: [
        ConferenceComponent,
    BookComponent,
    MyBookingComponent,
    LogTicketComponent,
    ManageTicketComponent],
    //providers: [CorporateService],
})
// export class CorporateModule {
//     static reducers(): { [key: string]: ActionReducer<any> } {
//         return { timesheet: timesheetReducer };
//     }
// }
export class CorporateModule { }
