// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';

// app
import { ApplyLeaveComponent } from './apply-leave.component';

export function main() {

    t.describe('Component: ApplyLeaveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [ApplyLeaveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub }
                ]
            });
        });

        t.it('on load status of component variables', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(homeInstance.leaves.length).toEqual(4);
                        t.e(homeInstance.charsLeft.length).toEqual(600);
                        t.e(homeInstance.model.numDays).toEqual(1);
                        t.e(homeInstance.model.leaveType).toEqual(1);
                        t.e(homeInstance.model.end).toEqual(new Date());
                        t.e(homeInstance.model.start).toEqual(new Date);
                        t.e(homeInstance.model.reason).toEqual('');
                        t.e(homeInstance.leaveTypeInvalid).toEqual(true);
                        t.e(homeInstance.endDt).toBeFalsy();
                        t.e(homeInstance.strtDt).toBeFalsy();
                        t.e(homeInstance.numDays).toEqual(0);
                        t.e(homeInstance.leavesHidden).toEqual(true);
                        
                    });
            });
        });

        
        t.it('test the startChanged() endChanged()  method', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.model.start = new Date();
                        fixture.detectChanges();
                        homeInstance.startChanged();
                        fixture.detectChanges();
                        var today = new Date();
                        t.e(homeInstance.model.end).toEqual(today);
                        t.e(homeInstance.minDate).toEqual(new Date(today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + 1));
                        
                        fixture.detectChanges();
                        homeInstance.endChanged();
                        t.e(homeInstance.strtDt).toEqual(new Date());
                        t.e(homeInstance.endDt).toEqual(new Date());
                        t.e(homeInstance.dayCount).toEqual(1);
                        t.e(homeInstance.model.numDays).toEqual(1);
                    });
            });
        });

        // t.it('test the reasonTextChanged() method', () => {
        //     t.async(() => {
        //         TestBed.compileComponents()
        //             .then(() => {
        //                 let fixture = TestBed.createComponent(TestComponent);
        //                 fixture.detectChanges();

        //                 let homeInstance = fixture.debugElement.children[0].componentInstance;

        //                 homeInstance.model.reason = 'high fever';
        //                 homeInstance.reasonTextChanged();
        //                 t.e(homeInstance.charsLeft).toEqual(600-homeInstance.model.reason.length);

        //                 homeInstance.model.reason = 'high fever and some personal reason';
        //                 homeInstance.reasonTextChanged();
        //                 t.e(homeInstance.charsLeft).toEqual(600-homeInstance.model.reason.length);
        //             });
        //     });
        // });

        // t.it('test the validateLeaveType() method', () => {
        //     t.async(() => {
        //         TestBed.compileComponents()
        //             .then(() => {
        //                 let fixture = TestBed.createComponent(TestComponent);
        //                 fixture.detectChanges();

        //                 let homeInstance = fixture.debugElement.children[0].componentInstance;

        //                 homeInstance.model.leaveType = 'select';
        //                 homeInstance.validateLeaveType();
        //                 t.e(homeInstance.leaveTypeInvalid).toEqual(false);

        //                 homeInstance.model.leaveType = 'Leave';
        //                 homeInstance.validateLeaveType();
        //                 t.e(homeInstance.leaveTypeInvalid).toEqual(true);
        //             });
        //     });
        // });

    });

}



@Component({
    selector: 'test-cmp',
    template: '<sd-applyleave></sd-applyleave>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}
