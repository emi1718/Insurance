import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
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
import { DashboardPageComponent } from './AdminComponents/DashBoard/dashboard-page/dashboard-page.component';
import { DashboardMainContentComponent } from './AdminComponents/DashBoard/dashboard-main-content/dashboard-main-content.component';
import { TopBarComponent } from './AdminComponents/Components/top-bar/top-bar.component';
import { SideBarComponent } from './AdminComponents/Components/side-bar/side-bar.component';
import { FooterComponent } from './AdminComponents/Components/footer/footer.component';
import { PoliciesPageComponent } from './AdminComponents/Policies/policies-page/policies-page.component';
import { PoliciesTableComponent } from './AdminComponents/Policies/policies-table/policies-table.component';
import { DashboardTableComponent } from './AdminComponents/DashBoard/dashboard-table/dashboard-table.component';
import { PoliciesFormComponent } from './AdminComponents/Policies/policies-form/policies-form.component';
import { UserPageComponent } from './AdminComponents/User/user-page/user-page.component';
import { UserTableComponent } from './AdminComponents/User/user-table/user-table.component';
import { UnActiveUserComponent } from './AdminComponents/User/un-active-user/un-active-user.component';
import { UnActivePageComponent } from './AdminComponents/User/un-active-page/un-active-page.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './AdminComponents/Admin/admin-page/admin-page.component';
import { AdminTableComponent } from './AdminComponents/Admin/admin-table/admin-table.component';
import { AdminFormComponent } from './AdminComponents/Admin/admin-form/admin-form.component';






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
    DashboardPageComponent,
    DashboardMainContentComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
    PoliciesPageComponent,
    PoliciesTableComponent,
    DashboardTableComponent,
    PoliciesFormComponent,
    UserPageComponent,
    UserTableComponent,

    UnActiveUserComponent,
     UnActivePageComponent,
   
     AdminPageComponent,
     AdminTableComponent,
     AdminFormComponent,








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
