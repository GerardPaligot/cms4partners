import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr, 'fr');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase, 'CMS4Partners'),
        AngularFirestoreModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
