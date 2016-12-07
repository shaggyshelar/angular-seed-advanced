import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA, Component, Directive, Input } from '@angular/core';
import { AuthComponent } from './auth.component';
import { t } from '../../../frameworks/test/index';
import { Observable } from 'rxjs/Observable';
import { CoreModule } from '../../../frameworks/core/core.module';
import { DropdownModule, SharedModule, ButtonModule } from 'primeng/primeng';
import { AuthService } from './auth.service';
import { FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

var authenticateUserName = '';
export function main() {

    t.describe('Component: AuthComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule, FormsModule, SharedModule],
                declarations: [AuthComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Router, useClass: RouterStub },
                    { provide: AuthService, useClass: AuthServiceStub }
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
        t.it('should have a model property initialize',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        t.expect(componentInstance.model.UserName).toBe('');
                    });
            }));
        t.it('should have a call login method',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let componentInstance = fixture.debugElement.children[0].componentInstance;
                        componentInstance.model.UserName = 'admin';
                        componentInstance.login();
                        t.expect(authenticateUserName).toBe('admin');
                    });
            }));
    });
};


@Component({
    selector: 'test-cmp',
    template: '<authenticate></authenticate>'
})
class TestComponent { }

class RouterStub {
    navigate(url: any) { return url; }
}

class AuthServiceStub {
    authenticate(credential) {
        authenticateUserName = credential.UserName;
        return new Observable<any>(observer => {
            observer.next();
        });
    }
    getLoggedInUserPermission() {
        return new Observable<any>(observer => {
            observer.next();
        });
    }
}
