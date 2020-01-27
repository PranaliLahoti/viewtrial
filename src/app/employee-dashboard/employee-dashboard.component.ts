import { Component, OnInit } from '@angular/core';

import { HttpClientService, ParcelDatabase } from '../http-client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  ParcelDatabases:string[];
  user: ParcelDatabase = new ParcelDatabase("","","","","","","","","","","","","","");


  constructor(
    private httpClientService:HttpClientService,
    private route : ActivatedRoute,
    private router: Router
  ) { 
    this.
    route.
    params.
    subscribe(params => {
      return params
    console.log(params)
    });
  }

  ngOnInit() {

    this.httpClientService.getparcelDetails().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
 
  }

  collectParcel(parcelID): void {
    this.user.parcelID=parcelID;
    alert(this.user.parcelID);
   
    this.httpClientService.collectParcel(this.user)
        .subscribe( data => {
          alert("Parcel will be collected");
          //alert(this.user.parcelID);
          //this.user.setParcelID(this.route.snapshot.paramMap.get("parcelID"));
        //  this.router.navigateByUrl('/employeedashboard');
        });
       
  };
  handleSuccessfulResponse(response)
  {
      this.ParcelDatabases=response;
  }

}

