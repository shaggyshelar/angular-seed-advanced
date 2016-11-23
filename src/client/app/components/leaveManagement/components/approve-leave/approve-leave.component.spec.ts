// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';


// app
import { ApproveLeaveComponent } from './approve-leave.component';

let urlVar : string = '';

export function main () {

    t.describe('Component: ApproveLeaveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [ApproveLeaveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub }
                ]
            });
        });

        t.it('should have a defined component',
            t.async(() => {
                TestBed.compileComponents ()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            }));

        
        t.it('check the contents of approvalRecords ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(homeInstance.approvalRecords[0].eid).toBe(23123);
                    });
            }));

            t.it('call editBtnClicked() for routing ', 
                t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.editBtnClicked();
                        t.e(urlVar).toBe('/leave-management/single-approval');
                    });
            })
            );

        
        t.it('number of rows for pagination',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        
                        t.e(homeInstance.servRows).toBe(10);
                    });
            }));

        
    });

};



@Component({
    selector: 'test-cmp',
    template: '<approve-leave></approve-leave>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { urlVar=url[0]; }
}
