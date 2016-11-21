// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

// app
import { ApplyLeaveComponent } from './apply-leave.component';

export function main() {

    t.describe('Component: ApplyLeaveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [ApplyLeaveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it ('should have a defined component',()=> {
            t.async(() => {
                TestBed.compileComponents ()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            });
        });

        t.it('on load status of component variables', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        t.e(homeInstance.leaves.length).toBe(5);
                        t.e(homeInstance.startDateDisabled).toBeTruthy();
                        t.e(homeInstance.endDateDisabled).toBeTruthy();
                        t.e(homeInstance.start).toBe(new Date());
                        t.e(homeInstance.end).toBe(new Date());
                        t.e(homeInstance.formIsClean).not.toBeTruthy();
                        t.e(homeInstance.isHalfDay).not.toBeTruthy();
                        t.e(homeInstance.showWarning).not.toBeTruthy();
                        t.e(homeInstance.warning).toBe('');

                    });
            });
        });

        t.it('changing type of leave to LEAVE call to leaveTypeChanged()', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        let event = { value: { id: 1 } };
                        homeInstance.leaveTypeChanged(event);
                        fixture.detectChanges();
                        t.e(homeInstance.showNumDays).toBe(1);
                        t.e(homeInstance.numberofdays).toBe(1);
                        t.e(homeInstance.startdateDisabled).not.toBeTruthy();
                        t.e(homeInstance.enddateDisabled).not.toBeTruthy();
                        t.e(homeInstance.isHalfDay).not.toBeTruthy();
                        t.e(homeInstance.start).toBe(new Date());
                        t.e(homeInstance.end).toBe(new Date());
                        t.e(homeInstance.warning).toBe('');

                    });
            });
        });

        t.it('changing type of leave to HALF DAY LEAVE call to leaveTypeChanged()', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        let event = { value: { id: 1 } };
                        homeInstance.leaveTypeChanged(event);
                        fixture.detectChanges();
                        t.e(homeInstance.showNumDays).toBe(0.5);
                        t.e(homeInstance.numberofdays).toBe(0.5);
                        t.e(homeInstance.startdateDisabled).not.toBeTruthy();
                        t.e(homeInstance.enddateDisabled).toBeTruthy();
                        t.e(homeInstance.isHalfDay).toBeTruthy();
                        t.e(homeInstance.start).toBe(new Date());
                        t.e(homeInstance.end).toBe(new Date());
                        t.e(homeInstance.warning).toBe('');

                    });
            });
        });

        t.it('test the startSelected() method', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.start = new Date();
                        fixture.detectChanges();
                        homeInstance.startSelected();
                        fixture.detectChanges();
                        t.e(homeInstance.end).toBe(new Date());

                    });
            });
        });

        t.it('test the dayDiffCalc() method by calling endSelected()', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.start = new Date();
                        homeInstance.end = new Date(homeInstance.start.getFullYear() + '-' + homeInstance.start.getMonth() + '-' + homeInstance.start.getDate() + 1);
                        fixture.detectChanges();

                        homeInstance.endSelected();
                        t.e(homeInstance.showNumDays).toBe(2);
                        t.e(homeInstance.numberofdays).toBe(2);
                    });
            });
        });

        t.it('test the dayDiffCalc() method by calling endSelected()', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.cancelPressed();
                        t.e(homeInstance.finalLeaveData.length).toBe(0);
                        t.e(homeInstance.end).toBe(new Date());
                        t.e(homeInstance.start).toBe(new Date());
                        t.e(homeInstance.numberofdays).toBe(0);
                        t.e(homeInstance.showNumDays).toBe(0);
                        t.e(homeInstance.selectedLeave).toBe({ label: 'Select', value: { id: 0, name: 'Select' } });
                        t.e(homeInstance.reason).toBe('');
                        t.e(homeInstance.warning).toBe('');
                        t.e(homeInstance.formIsClean).toBe(false);
                        t.e(homeInstance.leaveVisible).toBe(true);
                    });
            });
        });

        t.it('test the fillFinalLeaveData() method by calling addLeaves() for Half-day Leave', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.isHalfDay = true;
                        homeInstance.addLeaves();
                        t.e(homeInstance.warning).toBe('Reason cannot be left blank!');
                        t.e(homeInstance.formIsClean).toBe(false);
                        t.e(homeInstance.numberofdays).toBe(0.5);
                        t.e(homeInstance.showNumDays).toBe(0.5);

                        fixture.detectChanges();
                        homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.isHalfDay = true;
                        homeInstance.reason = 'Personal';
                        homeInstance.addLeaves();
                        t.e(homeInstance.warning).toBe('');
                        t.e(homeInstance.formIsClean).toBe(true);
                        t.e(homeInstance.numberofdays).toBe(0.5);
                        t.e(homeInstance.showNumDays).toBe(0.5);
                    });
            });
        });

        t.it('test the fillFinalLeaveData() method by calling addLeaves() for Leave', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.isHalfDay = false;
                        homeInstance.start = new Date();
                        homeInstance.end = new Date(homeInstance.start.getFullYear() + '-' + homeInstance.start.getMonth() + '-' + homeInstance.start.getDate() + 1);
                        homeInstance.addLeaves();
                        t.e(homeInstance.warning).toBe('Reason cannot be left blank!');
                        t.e(homeInstance.formIsClean).toBe(false);
                        t.e(homeInstance.numberofdays).toBe(2);
                        t.e(homeInstance.showNumDays).toBe(2);

                        fixture.detectChanges();
                        homeInstance = fixture.debugElement.children[0].componentInstance;

                        homeInstance.isHalfDay = true;
                        homeInstance.reason = 'Personal';
                        homeInstance.start = new Date();
                        homeInstance.end = new Date(homeInstance.start.getFullYear() + '-' + homeInstance.start.getMonth() + '-' + homeInstance.start.getDate() + 1);
                        homeInstance.addLeaves();
                        t.e(homeInstance.warning).toBe('');
                        t.e(homeInstance.formIsClean).toBe(true);
                        t.e(homeInstance.numberofdays).toBe(2);
                        t.e(homeInstance.showNumDays).toBe(2);
                    });
            });
        });
    });

}



@Component({
    selector: 'test-cmp',
    template: '<sd-applyleave></sd-applyleave>'
})
class TestComponent { }

