import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr'; // Pour importer le francais
import * as de from '@angular/common/locales/de'; // Pour importer l allemand


import { AppComponent } from './app.component';
import { FaceSnapeComponent } from './face-snape/face-snape.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(de.default)
  }
}
