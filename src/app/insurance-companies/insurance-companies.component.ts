import { Component, OnInit } from '@angular/core';
import { InsuranceCompaniesService } from '../shared/insurance-companies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.css']
})
export class InsuranceCompaniesComponent implements OnInit {

  constructor(public obj:InsuranceCompaniesService) { }

  ngOnInit() {this.resetForm()
    this.obj.getICompany();
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.icData={ComapanyIdentificationNo:0,CompanyName:'',CompanyContact:'', CompanyAddress:''}
    }
  }

  onSubmit(form:NgForm){
    this.obj.postICompany().subscribe(res => {
      this.obj.getICompany();
      alert("Inserted Successfully!!!")
    },
    err => {
      alert("Not Inserted"+err)
    })
    
  }
  fillform(selected) {
    this.obj.icData=Object.assign({},selected);
  }
  

}
