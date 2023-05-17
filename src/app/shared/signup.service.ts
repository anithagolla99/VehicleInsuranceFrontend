import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';



@Injectable({
  providedIn: 'root'
})
export class SignupService {  
   
  registerData: Customer = new Customer();
  registerList:Customer[];

  constructor(public http: HttpClient) { }

  apiUrl = "https://localhost:44344/api/Customers";

  getCustomer() {
    this.http.get(this.apiUrl).toPromise().then(res => this.registerList = res as Customer[])
  }

  postCustomer() {
    return this.http.post(this.apiUrl, this.registerData);
  }
  putregister() {
    return this.http.put(this.apiUrl + "/" + this.registerData.CustomerId, this.registerData)
  }

  delregister(CustomerId) {
    return this.http.delete(this.apiUrl + "/" + CustomerId);
  }

}
