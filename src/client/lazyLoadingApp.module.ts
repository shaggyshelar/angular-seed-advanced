import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';


// app
import { APP_COMPONENTS, AppComponent } from './app/components/index';
import { FeaturesModule } from './app/features/features.module';
import { routes } from './app/components/app.routes';

let routerModule = RouterModule.forRoot(routes);
console.error('HHHHHHHHHHHHHSDF');
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
