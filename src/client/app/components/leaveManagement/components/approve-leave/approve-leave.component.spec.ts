// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

// app
import { ApproveLeaveComponent } from './approve-leave.component';

export function main () {

    t.describe('Component: ApproveLeaveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [ApproveLeaveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it('should have a defined component', ()=> {
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

        t.it('table should contain 9 columns with proper headings', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        var table = fixture.nativeElement.getElementsByClassName('undefined');
                        var tHead = table.nativeElement.querySelectorAll('thead')[0];
                        var tr = tHead.nativeElement.querySelectorAll('tr')[0];

                        t.e(tr.nativeElement.querySelectorAll('th').length).toBe(9);

                        t.e(tr.nativeElement.querySelectorAll('th')[0].innerHTML).toBe('Employee');
                        t.e(tr.nativeElement.querySelectorAll('th')[1].innerHTML).toBe('Employee ID');
                        t.e(tr.nativeElement.querySelectorAll('th')[2].innerHTML).toBe('No. of Leaves');
                        t.e(tr.nativeElement.querySelectorAll('th')[3].innerHTML).toBe('Status');
                        t.e(tr.nativeElement.querySelectorAll('th')[4].innerHTML).toBe(' Start Date');
                        t.e(tr.nativeElement.querySelectorAll('th')[5].innerHTML).toBe('End Date');
                        t.e(tr.nativeElement.querySelectorAll('th')[6].innerHTML).toBe('Approvers');
                        t.e(tr.nativeElement.querySelectorAll('th')[7].innerHTML).toBe('Pending Approvers');
                        t.e(tr.nativeElement.querySelectorAll('th')[8].innerHTML).toBe('Approvers');
                        t.e(tr.nativeElement.querySelectorAll('th')[9].innerHTML).toBe('Action');
                    });
            });
        });

        t.it('table should contain 9 columns with proper headings', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        //REDIRECTION TEST CASE TO BE ADDED ON 'EDIT' BUTTON CLICK
                    });
            });
        });
    });

}



@Component({
    selector: 'test-cmp',
    template: '<approve-leave></approve-leave>'
})
class TestComponent { }
