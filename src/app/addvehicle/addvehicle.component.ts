import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../shared/vehicles.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  constructor(public obj:VehiclesService) { }

  ngOnInit() {this.resetForm()
    this.obj.getVehicle();
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.vehicleData={VehicleId:0,VehicleName:'',VehicleModel:'', VehicleNo:'',VehiclePrice:'',VehiclePurchasedDate:'', CustomerId:''}
    }
  }

  onSubmit(form:NgForm){
    this.obj.postVehicle().subscribe(res => {
      this.obj.getVehicle();
      alert("Inserted Successfully!!!")
    },
    err => {
      alert("Not Inserted"+err)
    })
    
  }
  fillform(selected) {
    this.obj.vehicleData=Object.assign({},selected);
  }

}
