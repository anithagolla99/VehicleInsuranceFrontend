import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../shared/claims.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-claims',
  templateUrl: './register-claims.component.html',
  styleUrls: ['./register-claims.component.css']
})
export class RegisterClaimsComponent implements OnInit {

  constructor( public obj:ClaimsService) { }

  ngOnInit() {this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.claimData={
        ClaimId:0,
        LicenceNo:'',
        SupportedDocuments:'',
        ClaimReason:'',
        VehicleCondition:'',
        ClaimAmount:0, 
        BranchName:'',
        BankName:'', 
        BankAccountNo:'', 
        IfscCode:'', 
        ClaimStatus:'', 
       CustomerId:0, 
        PolicyId:0, 
      
    }
  }
}

  onSubmit(form:NgForm)
  {
    if (this.obj.claimData.ClaimId == 0) {
      this.obj.postClaim().subscribe(res => {
        this.obj.getClaim();
        this.resetForm();
        alert("Inserted Successfully!!!")
      },
      err => {
        alert("Not Inserted"+err)
      })
    } else {
      this.obj.putClaim().subscribe(res => {
        this.obj.getClaim();
        this.resetForm();
        alert("Updated Successfully!!!")
      },
      err => {
        alert("Not Updated"+err)
      })
    }
   
    
  }
  


  }

