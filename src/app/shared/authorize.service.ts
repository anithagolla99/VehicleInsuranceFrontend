import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../models/login.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(public obj:HttpClient,private router:Router) { }

  loginList:Login[];
  loginData:Login=new Login();

 
  // login(data:any):Observable<any>{
  //   return this.obj.post('https://localhost:44344/api/Logins/login',data);
  // }
  login() {

     return this.obj.post("https://localhost:44344/api/Logins/login", this.loginData);
    
     }
  

  private isTokenExpired(token: string) {
    if(token===null){
      return true;
    }
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  console.log(expiry);
  return expiry * 1000 < Date.now();
}
  isAuthenticated():boolean{
    var token1 = localStorage.getItem('token')?localStorage.getItem('token'):null;
    if(this.isTokenExpired(token1))
      return false;
    return true;
  }

//   loginProcess(form?: NgForm) {
//     this.login().subscribe((result) => {
//       console.log(result);
//       this.resetForm(form);
//       localStorage.setItem('token', result['Token']);

//       if (result['Token'] != null) {
//         alert('Login Successful');
//       } else {
//         alert('Login is unsuccessful');
//       }

//       this.router.navigate(['/']);
//     });
//   }
//   resetForm(form: NgForm) {
//     throw new Error('Method not implemented.');
//   }


// }


}
