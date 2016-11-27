/** Corporate Application State */
import { Ticket } from './ticket';
import { Conference } from './conference';

/** State Definition */
export interface CorporteState {
    conferenceEvents:Conference[];
    tickets: Ticket[];
}
