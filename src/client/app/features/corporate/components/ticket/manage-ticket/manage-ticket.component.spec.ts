import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA, Component, Directive, Input } from '@angular/core';
import { ManageTicketComponent } from './manage-ticket.component';
import { t } from '../../../../../frameworks/test/index';
import { Observable } from 'rxjs/Observable';
import { CoreModule } from '../../../../../frameworks/core/core.module';
import { DropdownModule, SharedModule, ButtonModule } from 'primeng/primeng';
import { TicketService } from '../../../services/ticket.service';
import { MessageService } from '../../../../core/shared/services/message.service';
import { Ticket } from '../../../models/ticket';
import { FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

export function main() {

    t.describe('Component: ManageTicketComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CommonModule, CoreModule, FormsModule, ReactiveFormsModule, DropdownModule, SharedModule, ButtonModule],
                declarations: [ManageTicketComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub },
                    { provide: TicketService, useClass: TicketServiceStub },
                    { provide: MessageService, useClass: MessageServiceStub },
                    { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'id': 1 }]) } }
                ]
            });
        });
        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }));
        t.it('should have a departments property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.departments.length).toBe(4);
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<manage-ticket></manage-ticket>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}

class TicketServiceStub {
    editTicket(ticket) {
        return new Observable<any>(observer => {
            observer.next();
        });
    }
    saveTicket(ticket) {
        return new Observable<any>(observer => {
            observer.next();
        });
    }
    getTicketById(id) {
        return new Observable<any>(observer => {
            observer.next();
        });
    }
}

class MessageServiceStub {
    addMessage(message) {
        return;
    }

}
