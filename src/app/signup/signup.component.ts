import { Component, OnInit } from '@angular/core';
import { SignupService } from '../shared/signup.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public obj:SignupService,private router:Router) { }

  ngOnInit() {this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.registerData={CustomerId:0,CustomerName:'',CustomerAge:'', CustomerAddress:'',CustomerState:'',CustomerCountry:'', CustomerEmail:'',CustomerContact:'',LicenceNo:'',   CustomerPassword:''}
    }
  }

  onSubmit(form:NgForm){
    this.obj.postCustomer().subscribe(res => {
      this.obj.getCustomer();
      alert("Inserted Successfully!!!")
      this.router.navigate(["login"])
    },
    err => {
      alert("Not Inserted"+err)
    })
    
  }

}
