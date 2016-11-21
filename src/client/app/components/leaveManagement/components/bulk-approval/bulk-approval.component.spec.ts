// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

// app
import { BulkApproveComponent } from './bulk-approval.component';

export function main() {

    t.describe('Component: BulkApproveComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [BulkApproveComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it('should have a defined component', ()=> {
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

        t.it('should have defined bulkapproval component',
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
    });
}



@Component({
    selector: 'test-cmp',
    template: '<bulkapproval></bulkapproval>'
})
class TestComponent { }

