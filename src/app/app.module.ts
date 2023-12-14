import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './UserComponents/Home/home-page/home-page.component';
import { TopBarComponentComponent } from './UserComponents/Components/top-bar-component/top-bar-component.component';

import { HeaderComponentComponent } from './UserComponents/Home/header-component/header-component.component';
import { AboutComponentComponent } from './UserComponents/Components/about-component/about-component.component';
import { FactComponentComponent } from './UserComponents/Components/fact-component/fact-component.component';
import { FeatureComponentComponent } from './UserComponents/Components/feature-component/feature-component.component';
import { ServiceComponentComponent } from './UserComponents/Components/service-component/service-component.component';
import { ContactComponentComponent } from './UserComponents/Components/contact-component/contact-component.component';
import { ReviewComponentComponent } from './UserComponents/Components/review-component/review-component.component';
import { FooterComponentComponent } from './UserComponents/Components/footer-component/footer-component.component';
import { AboutPageComponent } from './UserComponents/About/about-page/about-page.component';

import { AboutHeaderComponentComponent } from './UserComponents/About/about-header-component/about-header-component.component';
import { ServicePageComponent } from './UserComponents/Service/service-page/service-page.component';

import { ServiceHeaderComponentComponent } from './UserComponents/Service/service-header-component/service-header-component.component';
import { InsurancePageComponent } from './UserComponents/Insurance/insurance-page/insurance-page.component';
import { InsuranceHeaderComponentComponent } from './UserComponents/Insurance/insurance-header-component/insurance-header-component.component';

import { ContactPageComponent } from './UserComponents/Contact/contact-page/contact-page.component';
import { ContactHeaderComponentComponent } from './UserComponents/Contact/contact-header-component/contact-header-component.component';

import { LoginPageComponent } from './UserComponents/Login/login-page/login-page.component';
import { LoginComponentComponent } from './UserComponents/Login/login-component/login-component.component';
import { SignPageComponent } from './UserComponents/Sign/sign-page/sign-page.component';
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
import { CustomeInterceptor } from './Intercept/custome.interceptor';
import { NavbarComponent } from './UserComponents/Components/navbar/navbar.component';
import { PolicyFormComponent } from './UserComponents/PolicyForm/policy-form/policy-form.component';
import { PolicyHeaderComponent } from './UserComponents/PolicyForm/policy-header/policy-header.component';
import { PolicyComponentComponent } from './UserComponents/PolicyForm/policy-component/policy-component.component';
import { TransactionFormComponent } from './UserComponents/Transaction/transaction-form/transaction-form.component';
import { TransactionHeaderComponent } from './UserComponents/Transaction/transaction-header/transaction-header.component';
import { TransactionPageComponent } from './UserComponents/Transaction/transaction-page/transaction-page.component';
import { DetailPageComponent } from './UserComponents/PolicyDetail/detail-page/detail-page.component';
import { DetailComponentComponent } from './UserComponents/PolicyDetail/detail-component/detail-component.component';
import { LoanTableComponent } from './AdminComponents/loanAmount/loan-table/loan-table.component';
import { LoanFormComponent } from './AdminComponents/loanAmount/loan-form/loan-form.component';
import { ApplyPageComponent } from './UserComponents/ApplyLoan/apply-page/apply-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponentComponent,
 
    HeaderComponentComponent,

    AboutComponentComponent,
    FactComponentComponent,
    FeatureComponentComponent,
    ServiceComponentComponent,
    ContactComponentComponent,
    ReviewComponentComponent,
    FooterComponentComponent,
    AboutPageComponent,
   
    AboutHeaderComponentComponent,
    ServicePageComponent,
   
    ServiceHeaderComponentComponent,
    InsurancePageComponent,
    InsuranceHeaderComponentComponent,
   
    ContactPageComponent,
    ContactHeaderComponentComponent,
 
    LoginPageComponent,

    LoginComponentComponent,
    SignPageComponent,
 
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
     NavbarComponent,
     PolicyFormComponent,
     PolicyHeaderComponent,
     PolicyComponentComponent,
     TransactionFormComponent,
     TransactionHeaderComponent,
     TransactionPageComponent,
     DetailPageComponent,
     DetailComponentComponent,
     LoanTableComponent,
     LoanFormComponent,
     ApplyPageComponent,
    









  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:CustomeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
