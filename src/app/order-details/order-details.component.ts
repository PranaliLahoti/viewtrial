import { Component, OnInit } from '@angular/core';
import { HttpClientService, ParcelDatabase } from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  user: ParcelDatabase = new ParcelDatabase("","","","","","","","","","","","","","");
  
  constructor(
    private httpClientService: HttpClientService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("order entry created successfully.");
          this.router.navigateByUrl('/securitydashboard');
        });

  };

}
