import { AdminEditParkingComponent } from './admin-edit-parking/admin-edit-parking.component';
import { AdminCreateParkingComponent } from './admin-create-parking/admin-create-parking.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin/home', component: AdminHomeComponent},
  {path: 'admin/create/parking', component: AdminCreateParkingComponent},
  {path: 'admin/edit/parking', component: AdminEditParkingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AdminHomeComponent,AdminCreateParkingComponent,AdminEditParkingComponent];
