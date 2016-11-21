// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

// app
import { SingleApprovalComponent } from './single-approval.component';

export function main() {

    t.describe('Component: SingleApprovalComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [SingleApprovalComponent, TestComponent],
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

        t.it('should have defined singleapproval component',
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

        t.it('on page load page status', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(fixture.nativeElement.querySelector('textarea').getAttributes('text')).toBe('');
                        t.e(fixture.nativeElement.querySelectorAll('button')[1].innerHTML).toBe('Approve');
                        t.e(fixture.nativeElement.querySelectorAll('button')[2].innerHTML).toBe('Reject');
                        t.e(fixture.nativeElement.querySelectorAll('button')[3].innerHTML).toBe('Close');
                        t.e(fixture.nativeElement.querySelectorAll('h4')[2].innerHTML).toBe('Requestor Details');
                    });
            });
        });

        t.it('validation click APPROVE with blank comments field', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(fixture.nativeElement.querySelector('textarea').getAttributes('text')).toBe('');
                        t.e(fixture.nativeElement.querySelectorAll('button')[1].innerHTML).toBe('Approve');
                        t.e(fixture.nativeElement.querySelector('h5').innerHTML).toBe('Comments cannot be left blank');
                    });
            });
        });

        t.it('validation click APPROVE with comments not blank', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        fixture.nativeElement.querySelector('textarea').innerHTML = 'Approved';
                        fixture.detectChanges();
                        fixture.nativeElement.querySelectorAll('button')[1].click();
                        fixture.detectChanges();
                        t.e(fixture.nativeElement.querySelector('h5').innerHTML).toBe('Approved');
                    });
            });
        });

        t.it('validation click REJECT with blank comments field', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(fixture.nativeElement.querySelector('textarea').getAttributes('text')).toBe('');
                        t.e(fixture.nativeElement.querySelectorAll('button')[2].innerHTML).toBe('Reject');
                        t.e(fixture.nativeElement.querySelector('h5').innerHTML).toBe('Comments cannot be left blank');
                    });
            });
        });

        t.it('validation click REJECT with comments not blank', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        fixture.nativeElement.querySelector('textarea').innerHTML = 'Approved';
                        fixture.detectChanges();
                        fixture.nativeElement.querySelectorAll('button')[2].click();
                        fixture.detectChanges();
                        t.e(fixture.nativeElement.querySelector('h5').innerHTML).toBe('Rejected');
                    });
            });
        });

        //CLOSE BUTTON CLICK FOR REDIRECTION TEST CASE TO BE ADDED

    });
}


@Component({
    selector: 'test-cmp',
    template: '<singleapproval></singleapproval>'
})
class TestComponent { }
