import { Component, OnInit } from '@angular/core';
import { HttpClientService, ParcelDatabase } from '../http-client.service';
import {Router} from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ToastModel } from '@bmc-ux/adapt-angular';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  user: ParcelDatabase = new ParcelDatabase();
  mail:String;

  msgs: ToastModel[] = [];
  life: number = 3000;
  counts: number = 0;
  disabled: boolean = false;
  delay = 3000;
  placement = 'top-right';


  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private authentication: AuthenticationService

  ) { }

  ngOnInit() {

   
        
  }

  metadata = {
    companyName: 'BMC Software',
    logoClass: 'logo',
    //deprecated, use 'link' or 'route' or 'action' instead
    companyLink: 'http://company.link.com',
  
    link: 'http://company.link.com',
    // route: 'home-route',   // - use only one of 'action', 'route', 'link'
    // action: f1.bind(this), // - use only one of 'action', 'route', 'link'
    productName: 'MyIT',
    hideMobileLogo: false
  }
 /* temp(){
    this.authentication.logOut();
    this.router.navigate(['\login']);
  }*/
  items = [
    {
      name: 'Dashboard',
      link: '\securitydashboard',

      id: 1
    },
   
    {
      name: 'Handed over parcel',
      link: '\securityhistory',

      id: 2
    },
   
    {
      name: 'Collect Parcel',
      link: '\orders',

      id: 3
    },
    {
      name: 'Logout',
      link: '\logout',
      //action: this.temp(),
      id: 4
    }
  ]

  

  createEmployee(): void {
 
  
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          //alert(this.user.email);
          this.router.navigateByUrl('/securitydashboard');
        });
    //    setTimeout(() => { this.disabled = false; }, this.life);


  };

  handleSuccessfulResponse(response)
  {
     
  }

}
