

import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    public obj: AuthorizeService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    // this.initForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.loginData = {
        CustomerEmail: '',

        Password: '',

        Token: '',
      };
    }
  }

  loginProcess(form: NgForm) {
    // if(this.formGroup.valid){

    this.obj.login().subscribe((result) => {
      this.resetForm(form);

      localStorage.setItem('token', result['Token']);

      if (result['Token'] != null) {
        alert('Login Successful');
      } else {
        alert('Login is unsuccessful');
      }

      this.router.navigate(['addvehicle']);
    });
  }
}
