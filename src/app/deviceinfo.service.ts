import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceinfoService {

  constructor() { }

  Mobiles:any=[
    {Name:"Nokia",Id:143,DeviceDescription:"Nokia Brand Is Very Very Very Beautifull"},
    {Name:"moto",Id:144,DeviceDescription:"Moto Brand Is Very Very Good"},
    {Name:"Vivo",Id:145,DeviceDescription:"Vivo Brand Is Very Nice"},
    {Name:"Redmi",Id:146,DeviceDescription:"Redmi Brand Is Very Very Excellent"},
    {Name:"Samsung",Id:147,DeviceDescription:"Samsung Brand Is Very Good"},
  ]

}
