// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';

// app
import { MyLeavesComponent } from './my-leaves.component';

let urlVar : string = '';

export function main() {

    t.describe('Component: MyLeavesComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [MyLeavesComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub }
                ]
            });
        });


        t.it('should have defined leaves component',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            })
        );

        t.it('pagination row count',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(homeInstance.servRows).toBe(5);
                    });
            }));

        t.it('leaves dummy data values',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        t.e(homeInstance.leaves.length).toBe(3);
                    });
            }));

        t.it('check routing path for applyLeaveClicked() ',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.applyLeaveClicked();
                        t.e(urlVar).toBe('/leave-management/apply-leave');
                    });
            }));

            t.it('check routing path for updateBtnClicked()',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;
                        homeInstance.updateBtnClicked();
                        t.e(urlVar).toBe('/leave-management/update-leave');
                    });
            }));

    });
}



@Component({
    selector: 'test-cmp',
    template: '<leaves></leaves>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { urlVar=url[0]; }
}
