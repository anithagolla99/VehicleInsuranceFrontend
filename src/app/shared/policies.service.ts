import { Injectable } from '@angular/core';
import { Policies } from '../models/policies.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  policyData: Policies = new Policies;
  policyList: Policies[];

  constructor(public http :HttpClient) {}
  apiUrl="https://localhost:44344/api/Policies";

  getPolicy() {
    console.log("running");
    this.http.get(this.apiUrl).toPromise().then(res => this.policyList = res as Policies[]);
    
  }

  postPolicy() {
    return this.http.post(this.apiUrl, this.policyData);
  }
  putPolicy() {
    return this.http.put(this.apiUrl + "/" + this.policyData.PolicyId, this.policyData)
  }

  delPolicy(PolicyId) {
    return this.http.delete(this.apiUrl + "/" + PolicyId);
  }

}


  
    
