import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../shared/policies.service';
import { NgForm } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register-policy',
  templateUrl: './register-policy.component.html',
  styleUrls: ['./register-policy.component.css'],
})
export class RegisterPolicyComponent implements OnInit {
  policiesService: any;

  constructor(public obj: PoliciesService, private router: RouterModule) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.policyData = {
        PolicyId: 0,
        InsurenceAmount: '',
        PolicyType: '',
        VehicleType: '',
        PolicyStartDate: 'yyyy-mm-dd',
        PolicyExpiryDate: 'yyyy-mm-dd',
        VehicleId: '',
        ComapanyIdentificationNo: '',
      };
    }
  }

  onSubmit(form: NgForm) {
    if (this.obj.policyData.PolicyId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.obj.postPolicy().subscribe(
      (res) => {
        this.resetForm(form);

        this.obj.getPolicy();

        alert('Plan Registration Success!!!');
      },

      (err) => {
        console.log(err);

        alert( err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.obj.putPolicy().subscribe(
      (res) => {
        this.resetForm();

        this.obj.getPolicy();

        alert('Policy record Updated!!!');
      },

      (err) => {
        alert('Error!!!' + err);
      }
    );
  }
}

// navigate(): void{

//   this.router.navigate(['/delete'])

// }
