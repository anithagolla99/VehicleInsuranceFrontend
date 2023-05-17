import { Injectable } from '@angular/core';
import { InsuranceCompanies } from '../models/insurance-companies.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompaniesService {

  icData: InsuranceCompanies=new InsuranceCompanies();
  icList:InsuranceCompanies[];

  constructor(public http:HttpClient) { }

  apiUrl="https://localhost:44344/api/InsuranceCompanyDetails";

  getICompany() {
    this.http.get(this.apiUrl).toPromise().then(res => this.icList = res as InsuranceCompanies[])
  }

  postICompany() {
    return this.http.post(this.apiUrl, this.icData);
  }
  putIcompany() {
    return this.http.put(this.apiUrl + "/" + this.icData.ComapanyIdentificationNo, this.icData)
  }

  delVehicle(ComapanyIdentificationNo) {
    return this.http.delete(this.apiUrl + "/" + ComapanyIdentificationNo);
  }

}






