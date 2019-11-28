import { Component, OnInit } from '@angular/core';
import { DeviceinfoService } from '../deviceinfo.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  swamy:any=[];
  
  constructor(private device:DeviceinfoService) { }

  ngOnInit() {
    this.swamy=this.device.Mobiles;
    console.log(this.swamy);
}
  // Mobiles:any=[
  //   {Name:"Nokia",Id:143,DeviceDescription:"Nokia Brand Is Very Very Beautifull"},
  //   {Name:"moto",Id:144,DeviceDescription:"Moto Brand Is Very Very Good"},
  //   {Name:"Vivo",Id:145,DeviceDescription:"Vivo Brand Is Very Nice"},
  //   {Name:"Redmi",Id:146,DeviceDescription:"Redmi Brand Is Very Very Excellent"},
  //   {Name:"Samsung",Id:147,DeviceDescription:"Samsung Brand Is Very Good"},
  // ]
}


