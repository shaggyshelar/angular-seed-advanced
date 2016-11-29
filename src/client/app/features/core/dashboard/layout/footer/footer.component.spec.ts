import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer.component';
import { Component } from '@angular/core';
import { t } from '../../../../../frameworks/test/index';
import { LogService } from '../../../../framework.ref';

export function main() {

    t.describe('Component: FooterComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [FooterComponent, TestComponent],
                providers: [
                    { provide: LogService, useClass: LogServiceStub }
                ],
                schemas: [NO_ERRORS_SCHEMA]
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
        t.it('should have a page-Footer class',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.page-footer').length).toBe(1);
                    });
            }));
        t.it('should have 3 div element',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('div').length).toBe(3);
                    });
            }));
    });
};

class LogServiceStub {
    debug(message: any) {
        return message;
    }
}

@Component({
    selector: 'test-cmp',
    template: '<layout-footer></layout-footer>'
})
class TestComponent { }
