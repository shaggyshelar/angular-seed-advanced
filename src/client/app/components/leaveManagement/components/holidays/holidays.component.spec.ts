// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';

// app
import { HolidaysComponent } from './holidays.component';

export function main() {

    t.describe('Component: HolidaysComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [HolidaysComponent, TestComponent],
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

        t.it('clicked() called',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        var holidayRec = { title: 'Lakshmi Puja', date: '30-10-2016', day: 'Sunday', type: 'Fixed' };
                        homeInstance.clicked(holidayRec);
                        t.e(homeInstance.holidayDate).toBe(holidayRec.date);
                        t.e(homeInstance.holidayDay).toBe(holidayRec.day);
                        t.e(homeInstance.holidayTitle).toBe(holidayRec.title);
                        t.e(homeInstance.holidayType).toBe(holidayRec.type);
                        t.e(homeInstance.holidayDetails).toBe(true);
                    });
            }));

    });

}

@Component({
    selector: 'test-cmp',
    template: '<view-holidays></view-holidays>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}
