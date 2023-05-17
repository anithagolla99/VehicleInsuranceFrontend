import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../shared/policies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  

  constructor(public obj:PoliciesService) { }

  ngOnInit() {
    this.obj.getPolicy();
  }
  

 resetForm(form?:NgForm){
    if(form!=null){
      // form.form.reset();
    }
    else{
      this.obj.policyData={PolicyId:0, InsurenceAmount:'', PolicyType:'', VehicleType : '', PolicyStartDate : '', PolicyExpiryDate : '', VehicleId:0, ComapanyIdentificationNo :''}
    }
  }

  // onSubmit(form:NgForm){
  //   this.obj.postPolicy().subscribe(res => {
  //     this.obj.getPolicy();
  //     alert("Inserted Successfully!!!")
  //   },
  //   err => {
  //     alert("Not Inserted"+err)
  //   })
    
  // }

  fillform(selected) {
    this.obj.policyData=Object.assign({},selected);
  }

  del(PolicyId){
    if(
      confirm('Do you want to delete the policy ?')      
      )
      {
      this.obj.delPolicy(PolicyId).subscribe(res => {this.obj.getPolicy();
      alert("Policy Deleted!!!")
      
    },
      err=>(
        alert('Errror!!!'+err)
        ));      
    }
  }

  updateRecord(form: NgForm) {
    this.obj.putPolicy().subscribe(
      (res) => {
        this.resetForm();

        this.obj.getPolicy();

        alert('Plan record Updated!!!');
      },

      (err) => {
        alert('Error!!!' + err);
      }
    );
  }

  

  
}