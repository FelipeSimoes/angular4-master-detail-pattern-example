import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import * as Services from './providers/services';
import * as Controllers from './controllers';
// import * as Components from './components';
// import { Guards } from './guards';

@NgModule({
  declarations: [
    AppComponent,
    // all constrollers (smart components)
    // ...Object.keys(Controllers).map((k) => Controllers[k]),
    // all components (dumb components)
    // ...Object.keys(Components).map((k) => Components[k]),
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [
    // ...Object.keys(Services).map((k) => Services[k]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
