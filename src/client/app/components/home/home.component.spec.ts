// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BaseComponent, RouterExtensions } from '../../frameworks/core/index';
import { t } from '../../frameworks/test/index';
import { NameListService, nameListReducer, NameListEffects } from '../../frameworks/sample/index';
import { CoreModule } from '../../frameworks/core/core.module';
import { AnalyticsModule } from '../../frameworks/analytics/analytics.module';
import { MultilingualModule } from '../../frameworks/i18n/multilingual.module';
import { HomeComponent } from './home.component';
import { LoginService } from '../../shared/services/login.service';
import { MockLoginService } from '../../shared/mock-data/login.service';


// test module configuration for each test




export function main() {
  let isAboutURLCalled = false;
  class Router {
    public navigate(url, timeout) {
      if (url == '/about')
        isAboutURLCalled = true;
    }
  }
  const testModuleConfig = () => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule, RouterTestingModule, AnalyticsModule,
        MultilingualModule,
        StoreModule.provideStore({ names: nameListReducer }),
        EffectsModule.run(NameListEffects)
      ],
      declarations: [HomeComponent, TestComponent],
      providers: [
        NameListService,
        BaseRequestOptions,
        { provide: LoginService, useValue: new MockLoginService },
        { provide: RouterExtensions, useValue: new Router },
        MockBackend,
        {
          provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  };
  t.describe('@Component: HomeComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let homeInstance = fixture.debugElement.children[0].componentInstance;
            let homeDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(homeDOMEl.querySelectorAll('li').length).toEqual(0);

            homeInstance.newName = 'Minko';
            homeInstance.addName();

            fixture.detectChanges();
            homeInstance.readAbout();
            t.e(isAboutURLCalled).toEqual(true);
            t.e(homeDOMEl.querySelectorAll('li').length).toEqual(1);
            t.e(homeDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-home></sd-home>'
})
class TestComponent {

}
