import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';


const routes: Routes = [
  {path:'',component:DeviceComponent},
  {path:'device-details/:Id',component:DevicedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
