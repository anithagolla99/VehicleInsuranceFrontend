import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginList: Login[];

  loginData: Login = new Login();

  constructor(public obj: HttpClient) {}

  apiUrl = 'https://localhost:44344/api/Logins/login';

  getLogin() {
    this.obj
      .get(this.apiUrl)
      .toPromise()
      .then((res) => (this.loginList = res as Login[]));
  }

  postLogin() {
    console.log(this.loginData);

    return this.obj.post(this.apiUrl, this.loginData);
  }
}
