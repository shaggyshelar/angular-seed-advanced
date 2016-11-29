import { TestBed } from '@angular/core/testing';
import { QuickSidebarComponent } from './quick-sidebar.component';
import { Component } from '@angular/core';
import { t } from '../../../frameworks/test/index';

export function main() {

    t.describe('Component: QuickSidebarComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [QuickSidebarComponent, TestComponent]
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
        t.it('should have a page-quick-sidebar-toggler class',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.page-quick-sidebar-toggler').length).toBe(1);
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<quick-sidebar></quick-sidebar>'
})
class TestComponent { }
