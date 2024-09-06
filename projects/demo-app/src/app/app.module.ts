import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from 'projects/ngx-dynamic-form/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DynamicFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
