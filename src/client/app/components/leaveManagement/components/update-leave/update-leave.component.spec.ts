// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

// app
import { UpdateLeaveComponent } from './update-leave.component';

export function main() {

    t.describe('Component: UpdateLeaveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [UpdateLeaveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it('should have a defined component', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            });
        });

        t.it('should contain all tables', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(fixture.nativeElement.querySelectorAll('h4')[0].innerHTML).toBe('Requestor Details');
                        t.e(fixture.nativeElement.querySelectorAll('h4')[1].innerHTML).toBe('Active on Projects');
                        t.e(fixture.nativeElement.querySelectorAll('h4')[2].innerHTML).toBe('Update Leave');

                        var table = fixture.nativeElement.querySelectorAll('table')[0];
                        var tHead = table.nativeElement.querySelectorAll('tbody')[0];
                        var tr = tHead.nativeElement.querySelectorAll('tr')[0];
                        t.e(tr.nativeElement.querySelectorAll('td')[0]).toBe('Employee ID');
                        tr = tHead.nativeElement.querySelectorAll('tr')[1];
                        t.e(tr.nativeElement.querySelectorAll('td')[0]).toBe('Employee Name');
                        tr = tHead.nativeElement.querySelectorAll('tr')[2];
                        t.e(tr.nativeElement.querySelectorAll('td')[0]).toBe('Department');

                        table = fixture.nativeElement.querySelectorAll('table')[1];
                        tHead = table.nativeElement.querySelectorAll('thead')[0];
                        tr = tHead.nativeElement.querySelectorAll('tr')[0];

                        t.e(tHead.nativeElement.querySelectorAll('th')[0]).toBe('Project');
                        t.e(tHead.nativeElement.querySelectorAll('th')[1]).toBe('Manager');
                    });
            });
        });

        t.it('should contain all datatables', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        var primeNgElemnt = fixture.nativeElement.getElementsByClassName('undefined');
                        var tHead = primeNgElemnt.nativeElement.querySelectorAll('thead')[0];
                        var tr = tHead.nativeElement.querySelectorAll('tr')[0];
                        t.e(tr.nativeElement.querySelectorAll('th').length).toBe(6);

                        tHead = primeNgElemnt.nativeElement.querySelectorAll('thead')[0];
                        tr = tHead.nativeElement.querySelectorAll('tr')[0];
                        t.e(tr.nativeElement.querySelectorAll('th').length).toBe(4);
                    });
            });
        });

        t.it('should contain redirection link', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(fixture.nativeElement.getElementsByClassName('btn-outline').innerHTML).toBe(' Close ');

                        //REDIRECTION TEST CASE TO BE ADDED
                    });
            });
        });
    });
}



@Component({
    selector: 'test-cmp',
    template: '<singleapproval></singleapproval>'
})
class TestComponent { }
