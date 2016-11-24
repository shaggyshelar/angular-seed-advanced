// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';

// app
import { BulkApproveComponent } from './bulk-approval.component';

export function main() {

    t.describe('Component: BulkApproveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [BulkApproveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub }
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

        t.it('on page load page status',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(homeInstance.requests[0].eid).toBe(23132);
                        t.e(homeInstance.requests[1].eid).toBe(23133);
                        t.e(homeInstance.requests[2].eid).toBe(23134);
                        t.e(homeInstance.requests[3].eid).toBe(23135);
                        t.e(homeInstance.model.comments).toBe('');
                        t.e(homeInstance.selectedEmployees.length).toBe(0);
                        t.e(homeInstance.approved).toBe(false);
                        t.e(homeInstance.rejected).toBe(false);
                    });
            }));

        t.it('on approveClicked() status',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        
                        homeInstance.approveClicked();
                        t.e(homeInstance.approved).toBe(true);
                        
                    });
            }));

        t.it('on approveClicked() status',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.selectedEmployees.push({ eid: 23132, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' });
                        homeInstance.approveClicked();
                        t.e(homeInstance.approved).toBe(true);
                        
                    });
            }));

        t.it('on rejectClicked() status',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.selectedEmployees.push({ eid: 23132, employee: 'Employee', numberofleaves: 4, status: 'Approved', start: '01-10-2016', end: '10-10-2016', approvers: 'Manager, Manager, Manager, Manager', pending: '' });
                        homeInstance.rejectClicked();
                        t.e(homeInstance.rejected).toBe(true);
                        
                    });
            }));

    });
}



@Component({
    selector: 'test-cmp',
    template: '<bulkapproval></bulkapproval>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}
