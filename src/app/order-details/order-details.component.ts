import { Component, OnInit } from '@angular/core';
import { HttpClientService, ParcelDatabase } from '../http-client.service';
import {Router} from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  user: ParcelDatabase = new ParcelDatabase();
  
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
      link:'\securitydashboard',
      id: 1
    },
    {
      name: 'Logout',
      link: '\logout',
      //action: this.temp(),
      id: 2
    }
   
  ]
  

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
         // alert("order entry created successfully.");
          this.router.navigateByUrl('/securitydashboard');
        });

  };

}
