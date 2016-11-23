// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';

// app
import { SingleApprovalComponent } from './single-approval.component';

var urlVar: any;

export function main() {

    t.describe('Component: SingleApprovalComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [SingleApprovalComponent, TestComponent],
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

        t.it('should check for correct redirection path ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.closeClicked();
                        t.e(urlVar).toBe('/leave-management/approve-leave');
                    });
            }));

        t.it('should check action of rejectClicked() call ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.rejectClicked();
                        t.e(homeInstance.rejected).toBe(true);
                        t.e(homeInstance.approved).toBe(false);
                    });
            }));

        t.it('should check action of approveClicked() call ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.approveClicked();
                        t.e(homeInstance.rejected).toBe(false);
                        t.e(homeInstance.approved).toBe(true);
                    });
            }));

        t.it('should check action of submitForm() call with dummy object ',
        t.async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;
                    var form = { form : 'nothing here!' };
                    homeInstance.submitForm(form);
                });
        }));

    });
}


@Component({
    selector: 'test-cmp',
    template: '<singleapproval></singleapproval>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { urlVar = url[0]; }
}
