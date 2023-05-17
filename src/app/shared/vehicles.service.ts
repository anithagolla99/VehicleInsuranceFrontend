import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicles } from '../models/vehicles.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicleData: Vehicles=new Vehicles();
  vehicleList:Vehicles[];

  constructor(public http:HttpClient) { }

  apiUrl="https://localhost:44344/api/vehicles";

  getVehicle() {
    this.http.get(this.apiUrl).toPromise().then(res => this.vehicleList = res as Vehicles[])
  }

  postVehicle() {
    return this.http.post(this.apiUrl, this.vehicleData);
  }
  putVehicle() {
    return this.http.put(this.apiUrl + "/" + this.vehicleData.VehicleId, this.vehicleData)
  }

  delVehicle(VehicleId) {
    return this.http.delete(this.apiUrl + "/" + VehicleId);
  }

}





