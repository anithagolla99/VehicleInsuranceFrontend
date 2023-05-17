import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { PoliciesComponent } from './policies/policies.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterPolicyComponent } from './register-policy/register-policy.component';
import { RegisterClaimsComponent } from './register-claims/register-claims.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LogoutComponent } from './logout/logout.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,},
  {path:'signup',component:SignupComponent},
  {path:'claims',component:ClaimsComponent},
  {path:'policies',component:PoliciesComponent},
  {path:'InsuranceCompanies',component:InsuranceCompaniesComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'registerPolicy',component:RegisterPolicyComponent},
  {path:'registerClaim',component:RegisterClaimsComponent},
  {path:'addvehicle',component:AddvehicleComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'ClaimStatus',component:ClaimStatusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
