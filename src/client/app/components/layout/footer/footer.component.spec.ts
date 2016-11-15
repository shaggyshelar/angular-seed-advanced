import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FooterComponent } from './footer.component';
import { Component } from '@angular/core';
import { t } from '../../../frameworks/test/index';

let de: DebugElement;
let el: HTMLElement;

export function main() {

    describe('Component: FooterComponent', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        })
        t.it('should have a defined component', () => {
            //expect(true).toBeDefined();
            t.it('should build without a problem',
               t.async(() => {
                    TestBed.compileComponents()
                        .then(() => {
                            let fixture = TestBed.createComponent(TestComponent);
                            fixture.detectChanges();
                           // e(fixture.nativeElement).toBeTruthy();
                            expect(TestComponent).toBeDefined();
                        });
                }));
           
        });
    })
};


@Component({
  selector: 'test-cmp',
  template: '<layout-footer></layout-footer>'
})
class TestComponent {}