import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularFire2'


export const firebaseConfig  = {
  apiKey: "AIzaSyAo0PbpLQE26pLnXPmWK2FsKUx6xeBeK9o",
  authDomain: "xxxtest-94d16.firebaseapp.com",
  databaseURL: "https://xxxtest-94d16.firebaseio.com",
  storageBucket: ""
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


