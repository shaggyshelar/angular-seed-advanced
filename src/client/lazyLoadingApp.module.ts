import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

//libs
import { TranslateLoader } from 'ng2-translate';

// app
import { APP_COMPONENTS, AppComponent } from './app/components/index';

//app
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { MultilingualModule, translateFactory } from './app/frameworks/i18n/multilingual.module';
import { MultilingualEffects } from './app/frameworks/i18n/index';
import { SampleModule } from './app/frameworks/sample/sample.module';

// config
import { Config, WindowService, ConsoleService } from './app/frameworks/core/index';
//SIZE INCREASE 200KB
// Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
// if (String('<%= BUILD_TYPE %>') === 'dev') {
//   // only output console logging in dev mode
//   Config.DEBUG.LEVEL_4 = true;
// }
//END SIZE INCREASE 200KB

// sample config (extra)
import { AppConfig } from './app/frameworks/sample/services/app-config';
import { MultilingualService } from './app/frameworks/i18n/services/multilingual.service';
// custom i18n language support
//SIZE INCREASE 800KB
//MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

//let routerModule = RouterModule.forRoot(routes);

// if (String('<%= TARGET_DESKTOP %>') === 'true') {
//   Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
//   // desktop (electron) must use hash
//   routerModule = RouterModule.forRoot(routes, { useHash: true });
// }
//END-SIZE INCREASE 800KB

declare var window, console;

// For AoT compilation to work:
export function win() {
  return window;
}
export function cons() {
  return console;
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    // CoreModule.forRoot([
    //   { provide: WindowService, useFactory: (win) },
    //   { provide: ConsoleService, useFactory: (cons) }
    // ]), // increase by 500kb
    //AnalyticsModule, // increased by 808 kb
    //SampleModule  // Increase by 1.2 MB
    ],
  bootstrap: [AppComponent],
  declarations: [
    APP_COMPONENTS
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }
  ],
})
export class WebModule {}
