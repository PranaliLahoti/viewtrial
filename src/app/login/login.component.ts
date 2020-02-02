/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
    ngOnInit() {
    }
  
    checkLogin() {
      (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['/employeedashboard'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
  
        }
      )
      );
  
    }
  
  }
*/
import { Component, OnInit,ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
//import { AdaptCheckbox2Module } from '@bmc-ux/adapt-angular';

import { forwardRef, OnDestroy} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
//import {LoginFooter, AlertAnimatedConfig, AdaptNavigationService, untilComponentDestroyed} from '@angular/compiler/public_api';
import {filter} from 'rxjs/operators';
import { AdaptNavigationService, AlertAnimatedConfig, LoginFooter, untilComponentDestroyed } from '@bmc-ux/adapt-angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


export const ADAPT_LOGIN_PAGE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ADAPT_LOGIN_PAGE_ACCESSOR]
})
export class LoginComponent implements OnInit {
  public loginError: boolean = false;
  public checkbox: string[] = [];
  username = ''
  password = ''
  invalidLogin = false
  public alerts: Array<AlertAnimatedConfig> = [];

  public footerItems: LoginFooter = {
    version: 'Version 20.18.02.073',
    content: {
      copyright: 'Â© Copyright 2010-2018, BMC Software, Inc.',
      info: 'BMC Software, the BMC logos and other BMC marks are trademarks or registered ' +
        'trademarks of BMC Software, Inc. in the U.S. and/or certain other countries',
      helixLogo: true
    }
  };

  public simpleAlertConfig: AlertAnimatedConfig = {
    type: 'danger',
    title: 'Connection problem.',
    msg: 'Please refresh the page and try again.',
    icon: 'd-icon-exclamation_triangle'
  };

  constructor(private router: Router,
    private loginservice: AuthenticationService, private _navService: AdaptNavigationService) { }
    ngOnInit() {

      this._navService.alertsState
      .pipe(
        untilComponentDestroyed(this),
        filter(() => !this.alerts.length)
      )
      .subscribe((newAlert) => this.alerts.unshift(newAlert));

    }
  
    checkLogin() {
      
      (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['/securitydashboard'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
  
        }
      )
      );
  
    }

    showAlerts(content) {
      const {type, title, msg, icon} = this.simpleAlertConfig;
  
      if (this.username.length >= 3 && this.password.length >= 6) {
        this.loginError = true;
  
        this._navService.openAlert({
          type, title, msg, icon, content
        });
      }
    }
  
    closeAlert(alertObj) {
      this.loginError = false;
    }
  
    onRefresh(e: Event) {
      e.preventDefault();
  
      this.username = '';
      this.password = '';
      this.loginError = false;
    }
  
    ngOnDestroy() {}
  
  }


