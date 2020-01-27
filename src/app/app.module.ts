import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './basic-auth-http-interceptor.service';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ParcelHistoryComponent } from './parcel-history/parcel-history.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HandoverpageComponent } from './handoverpage/handoverpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    EmployeeDashboardComponent,
    
    ParcelHistoryComponent,
    
    SecurityDashboardComponent,
    
    OrderDetailsComponent,
    
    HandoverpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
