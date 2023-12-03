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
import { UnActivePageComponent } from './AdminComponents/User/un-active-page/un-active-page.component';


const routes: Routes = [
{path:"",component:HomePageComponent},
{path:"About",component:AboutPageComponent},
{path:"Service",component:ServicePageComponent},
{path:"Insurance",component:InsurancePageComponent},
{path:"Contact",component:ContactPageComponent},
{path:"Login",component:LoginPageComponent},
{path:"Sign",component:SignPageComponent},
// Admin page routeLink 
{path:"dashboard",component:DashboardPageComponent},
{path:"Policies",component:PoliciesPageComponent},
{path:"PoliciesForm",component:PoliciesFormComponent},
{path:"User",component:UserPageComponent},
{path:"UnactiveUser",component:UnActivePageComponent},
{}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
