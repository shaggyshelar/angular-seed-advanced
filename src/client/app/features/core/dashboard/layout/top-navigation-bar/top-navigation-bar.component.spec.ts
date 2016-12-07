import { TestBed } from '@angular/core/testing';
import { Directive, Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavigationBarComponent } from './top-navigation-bar.component';
import { t } from '../../../../../frameworks/test/index';
import { MultilingualModule } from '../../../../../frameworks/i18n/multilingual.module';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { LogService } from '../../../../framework.ref';

var isAuthneticatedStatus = false;
export function main() {

    t.describe('Component: TopNavigationBarComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    MultilingualModule, CommonModule,
                ],
                declarations: [TopNavigationBarComponent, TestComponent, RouterLinkStubDirective],
                providers: [
                    { provide: AuthService, useValue: new MockLoginService() },
                    { provide: Router, useClass: RouterStub },
                    { provide: LogService, useClass: LogServiceStub }
                ],
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
        t.it('should have a top-menu class',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.expect(fixture.nativeElement.querySelectorAll('.top-menu').length).toBe(1);
                    });
            }));
        t.it('should have a two external links',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
                        let links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
                        expect(links[0].linkParams).toBe('/profile');
                        expect(links[1].linkParams).toBe('/password/change');
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
    });
};


@Component({
    selector: 'test-cmp',
    template: '<top-navigation-bar></top-navigation-bar>'
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

class LogServiceStub {
    debug(message: any) {
        return message;
    }
}

@Directive({
    selector: '[routerLink]',
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
}
