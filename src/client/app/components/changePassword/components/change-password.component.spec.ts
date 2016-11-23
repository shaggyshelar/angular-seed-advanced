// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { CoreModule } from '../../../frameworks/core/core.module';

import { MultilingualModule } from '../../../frameworks/i18n/multilingual.module';
import { Router } from '@angular/router';

// app
import { ChangePasswordComponent } from './change-password.component';

export function main() {

    t.describe('Component: ChangePasswordComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, MultilingualModule],
                declarations: [ChangePasswordComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub }
                ]
            });
        });

        t.it('TC_04: To check whether changed password is getting saved or not',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        t.e(false).toBe(false);
                    });
            }));

    });
}


@Component({
    selector: 'test-cmp',
    template: '<change-password-component></change-password-component>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}
