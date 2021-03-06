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
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { WhyScreenComponent } from './components/why-screen/why-screen.component';
import { PackagesScreenComponent } from './components/packages-screen/packages-screen.component';
import { PackageCardComponent } from './components/packages-screen/package-card/package-card.component';
import { ReplaceLineBreaks } from './pipes/replace-line-break.pipe';
import { GarantiesScreenComponent } from './components/garanties-screen/garanties-screen.component';
import { QustionsScreenComponent } from './components/qustions-screen/qustions-screen.component';
import { ClientsScreenComponent } from './components/clients-screen/clients-screen.component';
import { FooterScreenComponent } from './components/footer-screen/footer-screen.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MatDialogModule, MatIconModule, MatListModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { PopupScreenComponent } from './components/popup-screen/popup-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeScreenComponent,
    KeysesScreenComponent,
    KeysCardComponent,
    KeysesFormComponent,
    WhyScreenComponent,
    PackagesScreenComponent,
    PackageCardComponent,
    ReplaceLineBreaks,
    GarantiesScreenComponent,
    QustionsScreenComponent,
    ClientsScreenComponent,
    FooterScreenComponent,
    PopupScreenComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    SlickCarouselModule,

    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [PopupScreenComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
