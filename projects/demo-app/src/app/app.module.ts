import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from 'projects/ngx-dynamic-form/src/public-api';
import { AddComponent } from './components/add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormExamplesComponent } from './components/dynamic-form-examples/dynamic-form-examples.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AppComponent, AddComponent, DynamicFormExamplesComponent],
  imports: [
    BrowserModule,
    DynamicFormComponent,
    AppRoutingModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
