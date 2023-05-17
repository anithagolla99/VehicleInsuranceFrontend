import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { PoliciesComponent } from './policies/policies.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RegisterPolicyComponent } from './register-policy/register-policy.component';
import { RegisterClaimsComponent } from './register-claims/register-claims.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LogoutComponent } from './logout/logout.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ClaimsComponent,
    PoliciesComponent,
    InsuranceCompaniesComponent,
    ContactComponent,
    AboutComponent,
    RegisterPolicyComponent,
    RegisterClaimsComponent,
    AddvehicleComponent,
    AdminLoginComponent,
    LogoutComponent,
    ClaimStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
