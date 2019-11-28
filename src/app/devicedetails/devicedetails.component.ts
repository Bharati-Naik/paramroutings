import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeviceinfoService } from '../deviceinfo.service';

@Component({
  selector: 'app-devicedetails',
  templateUrl: './devicedetails.component.html',
  styleUrls: ['./devicedetails.component.css']
})
export class DevicedetailsComponent implements OnInit {

  MobileDetails:any=[];
  MobileId;
  infoDev: any=[];

  constructor(private route:ActivatedRoute, private list:DeviceinfoService) { }

  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      this.MobileId = params.get('Id');
      this.MobileDetails=this.list.Mobiles;
      this.getDeviceInfo();
  })
}

  getDeviceInfo(){
    this.MobileDetails.filter((device)=>{
      if(device.Id==this.MobileId){
        this.infoDev.push(device)
      }
    })
  }
}

