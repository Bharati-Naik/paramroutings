import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';
import { DeviceinfoService } from './deviceinfo.service';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DevicedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DeviceinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
