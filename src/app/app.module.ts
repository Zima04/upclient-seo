import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { KeysesScreenComponent } from './components/keyses-screen/keyses-screen.component';
import { KeysCardComponent } from './components/keyses-screen/keys-card/keys-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeScreenComponent,
    KeysesScreenComponent,
    KeysCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
