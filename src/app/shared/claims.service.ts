import { Injectable } from '@angular/core';
import { Claims } from '../models/claims.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  claimData:Claims =  new Claims;
  claimList:Claims[];

  constructor( public http:HttpClient ){}

  apiUrl="https://localhost:44344/api/claims";


  getClaim() {
     this.http.get(this.apiUrl).toPromise().then(res => this.claimList = res as Claims[])
  }

  getClaimId(id) {
    return this.http.get(this.apiUrl+ "/" + id )
 }

  postClaim() {
    return this.http.post(this.apiUrl, this.claimData);
  }
  putClaim() {
    return this.http.put(this.apiUrl + "/" + this.claimData.ClaimId, this.claimData)
  }

  delClaim(claimId) {
    return this.http.delete(this.apiUrl + "/" + claimId);
  }

}


  
    



