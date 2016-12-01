import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { APP_COMPONENTS, AppComponent } from './app/components/index';
import { FeaturesModule } from './app/features/features.module';

//app
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';

// config
import { Config, WindowService, ConsoleService } from './app/frameworks/core/index';

let routerModule = RouterModule.forRoot(routes);

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
    FeaturesModule,
    BrowserModule,
    routerModule,
    CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: ConsoleService, useFactory: (cons) }
    ]), // increase by 500kb
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