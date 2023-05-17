import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../shared/claims.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  constructor(public obj: ClaimsService) { }
  ngOnInit() { this.obj.getClaim();
  }
  

 resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.claimData={ ClaimId:0, LicenceNo:'', SupportedDocuments:'',  ClaimReason : '', VehicleCondition : '', ClaimAmount : '', BranchName:'', BankName :'',BankAccountNo:'', IfscCode:'',ClaimStatus:'',CustomerId:0, PolicyId:0}
    }
  }

  // accept(form:NgForm){
   
  //     alert("Accepted Successfully!!!")
  //   },
  //   err => {
  //     alert("Not Inserted"+err)
  //   })
    
  

  fillform(selected) {
    this.obj.claimData=Object.assign({},selected);
  }

  del(PolicyId){
    if(
      confirm('Do you want to Reject the policy ?')      
      )
      {
      this.obj.delClaim(PolicyId).subscribe(res => {this.obj.getClaim();
      alert("Rejected!!!")
      
    },
      err=>(
        alert('Errror!!!'+err)
        ));      
    }
  }

  accept()
  {
    this.obj.putClaim().subscribe(res => {
      this.obj.getClaim();
      alert("Accepted!!!")
    },
    err => {
      alert("Not accepted"+err)
    })
    
  }

}

  

