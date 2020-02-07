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
import {AdaptNavigationModule} from '@bmc-ux/adapt-angular';
import { AdaptTextFieldModule } from '@bmc-ux/adapt-angular';
import { AdaptButtonModule } from '@bmc-ux/adapt-angular';
import { AdaptLoginPageModule } from '@bmc-ux/adapt-angular';

import { AdaptCheckbox2Module } from '@bmc-ux/adapt-angular';
import {AdaptModalModule} from '@bmc-ux/adapt-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdaptTableModule} from '@bmc-ux/adapt-table';
import { LogoutComponent } from './logout/logout.component';
import { SecurityHistoryComponent } from './security-history/security-history.component';
import {AdaptDropdownEditableModule} from '@bmc-ux/adapt-angular';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    EmployeeDashboardComponent,
    
    ParcelHistoryComponent,
    
    SecurityDashboardComponent,
    
    OrderDetailsComponent,
    
    HandoverpageComponent,
    
    LogoutComponent,
    
    SecurityHistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdaptNavigationModule.forRoot(),
    AdaptTextFieldModule,
    AdaptButtonModule,
    AdaptLoginPageModule,
    AdaptCheckbox2Module,
    AdaptModalModule,
    BrowserAnimationsModule,
    AdaptModalModule.forRoot(),
    AdaptTableModule,
    AdaptDropdownEditableModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
