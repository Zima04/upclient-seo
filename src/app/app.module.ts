import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { KeysesScreenComponent } from './components/keyses-screen/keyses-screen.component';
import { KeysCardComponent } from './components/keyses-screen/keys-card/keys-card.component';
import { KeysesFormComponent } from './components/keyses-screen/keyses-form/keyses-form.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeScreenComponent,
    KeysesScreenComponent,
    KeysCardComponent,
    KeysesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
