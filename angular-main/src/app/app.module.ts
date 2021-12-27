import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyMicroComponent } from './my-micro/my-micro.component';
import { MyPageComponent } from './my-page/my-page.component';

@NgModule({
  declarations: [AppComponent, MyPageComponent, MyMicroComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
