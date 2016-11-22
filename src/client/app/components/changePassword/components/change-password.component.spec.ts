// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { CoreModule } from '../../../frameworks/core/core.module';

// app
import { ChangePasswordComponent } from './change-password.component';

export function main() {

    t.describe('Component: SingleApproval', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [ChangePasswordComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it('TC_04: To check whether changed password is getting saved or not', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(false).toBe(true);
                    });
            });
        });

    });
}


@Component({
    selector: 'test-cmp',
    template: '<change-password-component></change-password-component>'
})
class TestComponent { }
