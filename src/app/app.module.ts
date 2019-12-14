import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FormElementComponent } from './main-layout/form-element/form-element.component';
import { ButtonElementComponent } from './main-layout/button-element/button-element.component';
import {stepReducer} from './store/step.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FormElementComponent,
    ButtonElementComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({stepPage: stepReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
