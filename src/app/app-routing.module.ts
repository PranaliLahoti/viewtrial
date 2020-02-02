import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { ParcelHistoryComponent } from './parcel-history/parcel-history.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HandoverpageComponent } from './handoverpage/handoverpage.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '\login', component: LoginComponent},
  { path:'\employeedashboard', component:EmployeeDashboardComponent,canActivate:[AuthGaurdService]},
  { path:'employeedashboard/:parcelID', component:EmployeeDashboardComponent},
  { path: '\parcelhistory' , component:ParcelHistoryComponent,canActivate:[AuthGaurdService]} ,
  {path:'\securitydashboard',component:SecurityDashboardComponent,canActivate:[AuthGaurdService]},
  { path:'\orders', component: OrderDetailsComponent,canActivate:[AuthGaurdService]},
  { path:'\handoverpage', component: HandoverpageComponent,canActivate:[AuthGaurdService] },
  { path:'handoverpage/:parcelID', component: HandoverpageComponent,canActivate:[AuthGaurdService]},
  { path:'\logout',component: LogoutComponent,canActivate:[AuthGaurdService]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
