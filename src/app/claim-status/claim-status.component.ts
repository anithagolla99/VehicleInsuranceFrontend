import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../shared/claims.service';

@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.css']
})
export class ClaimStatusComponent implements OnInit {

  constructor(public obj:ClaimsService) { }

  ngOnInit(): void {
  }

  checkStatus(ClaimId) {
     
      this.obj.getClaimId(ClaimId).subscribe(res=>{
        alert("Your cliam is " + res['ClaimStatus'])
      })

    
  }

}
