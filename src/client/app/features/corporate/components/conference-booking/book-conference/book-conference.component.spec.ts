import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component, Directive, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookComponent } from './book-conference.component';
import { t } from '../../../../../frameworks/test/index';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import { DropdownModule, SharedModule, CalendarModule, ButtonModule } from 'primeng/primeng';
import { ConferenceBookingService } from '../../../services/conference-booking.service';
import { MessageService } from '../../../../core/shared/services/message.service';
import { FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RoomService } from '../../../../core/shared/services/master/room.service';

export function main() {

    t.describe('Component: BookComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, RouterTestingModule, CalendarModule, ButtonModule, DropdownModule, SharedModule, FormsModule, ReactiveFormsModule],
                declarations: [BookComponent, TestComponent, RouterLinkStubDirective],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    FormBuilder,
                    { provide: Router, useClass: RouterStub },
                    { provide: RoomService, useClass: RoomServiceStub },
                    { provide: ConferenceBookingService, useClass: ConferenceBookingServiceStub },
                    { provide: MessageService, useClass: MessageServiceStub },
                ]
            });
        });
        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }));
        t.it('should have a conferenceRooms property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.conferenceRooms).toBeDefined();
                    });
            }));
        // t.it('should save a record',
        //     t.async(() => {
        //         TestBed.compileComponents()
        //             .then(() => {
        //                 let fixture = TestBed.createComponent(TestComponent);
        //                 fixture.detectChanges();
        //                 let componentInstance = fixture.debugElement.children[0].componentInstance;
        //                 componentInstance.conferenceModel.title = 'Meeting';
        //                 componentInstance.conferenceModel.start = new Date();
        //                 componentInstance.conferenceModel.end = new Date();
        //                 componentInstance.selectedRoom = { name: 'Bahamas', color: 'red' };
        //                 componentInstance.save();
        //                 t.expect(componentInstance.conferenceModel.conference).toBe('Bahamas');
        //                 t.expect(componentInstance.conferenceModel.color).toBe('red');
        //             });
        //     }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<book-conference></book-conference>'
})
class TestComponent { }


class RouterStub {
    navigate(url: any) { return url; }
}

class ConferenceBookingServiceStub {
    getConferenceBooking(conference) {
        return new Observable<any>(observer => {
            observer.next();
        });
    }
    getSelectedSlot() {
        return;
    }
}

class MessageServiceStub {
    addMessage(message) {
        return;
    }
}

@Directive({
    selector: '[routerLink]',
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
}

class RoomServiceStub {
    getConferenceRooms() {
        return new Observable<any>(observer => {
            observer.next();
        });
    }
}
