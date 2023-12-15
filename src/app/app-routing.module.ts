import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './UserComponents/Home/home-page/home-page.component';
import { AboutPageComponent } from './UserComponents/About/about-page/about-page.component';
import { ServicePageComponent } from './UserComponents/Service/service-page/service-page.component';
import { InsurancePageComponent } from './UserComponents/Insurance/insurance-page/insurance-page.component';
import { ContactPageComponent } from './UserComponents/Contact/contact-page/contact-page.component';
import { LoginPageComponent } from './UserComponents/Login/login-page/login-page.component';
import { SignPageComponent } from './UserComponents/Sign/sign-page/sign-page.component';
import { DashboardPageComponent } from './AdminComponents/DashBoard/dashboard-page/dashboard-page.component';
import { PoliciesPageComponent } from './AdminComponents/Policies/policies-page/policies-page.component';
import { PoliciesFormComponent } from './AdminComponents/Policies/policies-form/policies-form.component';
import { UserPageComponent } from './AdminComponents/User/user-page/user-page.component';

import { AdminPageComponent } from './AdminComponents/Admin/admin-page/admin-page.component';
import { AdminFormComponent } from './AdminComponents/Admin/admin-form/admin-form.component';

import { adminGuard } from './Guard/admin.guard';
import { PolicyFormComponent } from './UserComponents/PolicyForm/policy-form/policy-form.component';

import { TransactionPageComponent } from './UserComponents/Transaction/transaction-page/transaction-page.component';
import { DetailPageComponent } from './UserComponents/PolicyDetail/detail-page/detail-page.component';
import { LoanTableComponent } from './AdminComponents/loanAmount/loan-table/loan-table.component';
import { LoanFormComponent } from './AdminComponents/loanAmount/loan-form/loan-form.component';
import { ApplyFormComponent } from './UserComponents/ApplyLoan/apply-form/apply-form.component';
import { ApplyPageComponent } from './UserComponents/ApplyLoan/apply-page/apply-page.component';
import { InsuranceListComponent } from './AdminComponents/Insurance/insurance-list/insurance-list.component';
import { LoanListComponent } from './AdminComponents/Loan/loan-list/loan-list.component';
import { TransactionListComponent } from './AdminComponents/transaction/transaction-list/transaction-list.component';
import { ContactComponent } from './AdminComponents/contact/contact.component';


const routes: Routes = [
{path:"",component:HomePageComponent},
{path:"About",component:AboutPageComponent},
{path:"Service",component:ServicePageComponent},
{path:"Insurance",component:InsurancePageComponent},
{path:"Contact",component:ContactPageComponent},
{path:"Login",component:LoginPageComponent},
{path:"Sign",component:SignPageComponent},
{path:"policyForm",component:PolicyFormComponent},
{path:"TransactionForm",component:TransactionPageComponent},
{path:"MyPolicy",component:DetailPageComponent},
{path:"LoanDetail",component:ApplyFormComponent},
{path:'MyLoan',component:ApplyPageComponent},
// Admin page routeLink 
{path:"dashboard",component:DashboardPageComponent,canActivate:[adminGuard]},
{path:"Policies",component:PoliciesPageComponent,canActivate:[adminGuard]},
{path:"PoliciesForm",component:PoliciesFormComponent,canActivate:[adminGuard]},
{path:"User",component:UserPageComponent,canActivate:[adminGuard]},

{path:"Admin",component:AdminPageComponent,canActivate:[adminGuard]},
{path:"AddAdmin",component:AdminFormComponent,canActivate:[adminGuard]},
{path:"LoanAmount",component:LoanTableComponent,canActivate:[adminGuard]},
{path:"AddLoanAmount",component:LoanFormComponent,canActivate:[adminGuard]},
{path:"InsuranceList",component:InsuranceListComponent,canActivate:[adminGuard]},
{path:"LoanList",component:LoanListComponent,canActivate:[adminGuard]},
{path:"TList",component:TransactionListComponent,canActivate:[adminGuard]},
{path:"contactList",component:ContactComponent,canActivate:[adminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
