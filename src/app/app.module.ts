import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCreateParkingComponent } from './admin-create-parking/admin-create-parking.component';
import { AdminEditParkingComponent } from './admin-edit-parking/admin-edit-parking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogSlotDetailsComponent } from './dialog-slot-details/dialog-slot-details.component';
import { GetmanHomeComponent } from './getman-home/getman-home.component';
import { GetmanCheckInComponent } from './getman-check-in/getman-check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminCreateParkingComponent,
    AdminEditParkingComponent,
    DialogSlotDetailsComponent,
    GetmanHomeComponent,
    GetmanCheckInComponent
  ],
  entryComponents:[DialogSlotDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
