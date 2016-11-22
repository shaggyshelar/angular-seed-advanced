import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Component, Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../frameworks/test/index';
import { Router } from '@angular/router';
import { LoginService } from '../../../shared/services/login.service';
import { MultilingualModule } from '../../../frameworks/i18n/multilingual.module';
import { CommonModule } from '@angular/common';

var isAuthneticatedStatus = false;

export function main() {

    t.describe('Component: SidebarComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    MultilingualModule, CommonModule
                ],
                schemas: [NO_ERRORS_SCHEMA],
                declarations: [SidebarComponent, TestComponent, RouterLinkStubDirective, IfAuthorizeStubDirective],
                providers: [
                    { provide: LoginService, useValue: new MockLoginService() },
                    { provide: Router, useClass: RouterStub }
                ]
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
        t.it('should have a page-sidebar-wrapper class',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.page-sidebar-wrapper').length).toBe(1);
                    });
            }));
        t.it('should have isUserMenuOpen property set to false',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.isUserMenuOpen).toBe(false);
                    });
            }));
        t.it('should call logout method',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        isAuthneticatedStatus = false;
                        componentInstance.logout();
                        expect(isAuthneticatedStatus).toBe(true);
                    });
            }));
        // t.it('should have isUserMenuOpen property set to true',
        //     t.async(() => {
        //         TestBed.compileComponents()
        //             .then(() => {
        //                 let fixture = TestBed.createComponent(TestComponent);
        //                 fixture.detectChanges();
        //                 let componentInstance = fixture.debugElement.children[0].componentInstance;
        //                 componentInstance.toggleUserMenu();
        //                 t.expect(componentInstance.isUserMenuOpen).toBe(true);
        //             });
        //     }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<sidebar-menu></sidebar-menu>'
})
class TestComponent { }

class MockLoginService {
    public logout() {
        isAuthneticatedStatus = true;
        return;
    }
}
class RouterStub {
    navigate(url: any) { return url; }
}

@Directive({
    selector: '[routerLink]',
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
}

@Directive({
    selector: '[ifAuthorize]',
})
export class IfAuthorizeStubDirective {
    @Input('ifAuthorize') linkParams: any;
}
