import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './UserComponents/Home/home-page/home-page.component';
import { TopBarComponentComponent } from './UserComponents/Components/top-bar-component/top-bar-component.component';
import { NavbarComponentComponent } from './UserComponents/Home/navbar-component/navbar-component.component';
import { HeaderComponentComponent } from './UserComponents/Home/header-component/header-component.component';

import { AboutComponentComponent } from './UserComponents/Components/about-component/about-component.component';
import { FactComponentComponent } from './UserComponents/Components/fact-component/fact-component.component';
import { FeatureComponentComponent } from './UserComponents/Components/feature-component/feature-component.component';
import { ServiceComponentComponent } from './UserComponents/Components/service-component/service-component.component';
import { ContactComponentComponent } from './UserComponents/Components/contact-component/contact-component.component';
import { ReviewComponentComponent } from './UserComponents/Components/review-component/review-component.component';
import { FooterComponentComponent } from './UserComponents/Components/footer-component/footer-component.component';
import { AboutPageComponent } from './UserComponents/About/about-page/about-page.component';
import { AboutNavbarComponentComponent } from './UserComponents/About/about-navbar-component/about-navbar-component.component';
import { AboutHeaderComponentComponent } from './UserComponents/About/about-header-component/about-header-component.component';
import { ServicePageComponent } from './UserComponents/Service/service-page/service-page.component';
import { ServiceNavbarComponentComponent } from './UserComponents/Service/service-navbar-component/service-navbar-component.component';
import { ServiceHeaderComponentComponent } from './UserComponents/Service/service-header-component/service-header-component.component';
import { InsurancePageComponent } from './UserComponents/Insurance/insurance-page/insurance-page.component';
import { InsuranceHeaderComponentComponent } from './UserComponents/Insurance/insurance-header-component/insurance-header-component.component';
import { InsuranceNavbarComponentComponent } from './UserComponents/Insurance/insurance-navbar-component/insurance-navbar-component.component';
import { ContactPageComponent } from './UserComponents/Contact/contact-page/contact-page.component';
import { ContactHeaderComponentComponent } from './UserComponents/Contact/contact-header-component/contact-header-component.component';
import { ContactNavbarComponentComponent } from './UserComponents/Contact/contact-navbar-component/contact-navbar-component.component';
import { LoginPageComponent } from './UserComponents/Login/login-page/login-page.component';

import { LoginHeaderComponentComponent } from './UserComponents/Login/login-header-component/login-header-component.component';
import { LoginComponentComponent } from './UserComponents/Login/login-component/login-component.component';
import { SignPageComponent } from './UserComponents/Sign/sign-page/sign-page.component';
import { SignHeaderComponentComponent } from './UserComponents/Sign/sign-header-component/sign-header-component.component';
import { SignComponentComponent } from './UserComponents/Sign/sign-component/sign-component.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponentComponent,
    NavbarComponentComponent,
    HeaderComponentComponent,

    AboutComponentComponent,
    FactComponentComponent,
    FeatureComponentComponent,
    ServiceComponentComponent,
    ContactComponentComponent,
    ReviewComponentComponent,
    FooterComponentComponent,
    AboutPageComponent,
    AboutNavbarComponentComponent,
    AboutHeaderComponentComponent,
    ServicePageComponent,
    ServiceNavbarComponentComponent,
    ServiceHeaderComponentComponent,
    InsurancePageComponent,
    InsuranceHeaderComponentComponent,
    InsuranceNavbarComponentComponent,
    ContactPageComponent,
    ContactHeaderComponentComponent,
    ContactNavbarComponentComponent,
    LoginPageComponent,
    LoginHeaderComponentComponent,
    LoginComponentComponent,
    SignPageComponent,
    SignHeaderComponentComponent,
    SignComponentComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
