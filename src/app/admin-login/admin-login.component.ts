import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
    constructor(private router:Router) { }
  
    ngOnInit(): void {
    }
    AdminLogin = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  submit():void {
  
  if (this.AdminLogin.value.username==="Admin"&&this.AdminLogin.value.password==="Admin@99"){
    alert("Login Successful");
    this.router.navigate(["claims"])
  }
  else{
    alert("Login  is invalid");
  }
  }
  
    
  }