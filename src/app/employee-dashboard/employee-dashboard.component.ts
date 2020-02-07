import { Component, OnInit } from '@angular/core';

import { HttpClientService, ParcelDatabase } from '../http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ColumnConfig, ToolbarConfig } from '@bmc-ux/adapt-table';
import { FilterMetadata } from 'primeng/api';
import { KeyValueObject } from '@bmc-ux/adapt-angular/public-api';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  ParcelDatabases:string[];
  user: ParcelDatabase = new ParcelDatabase();
  public cols: ColumnConfig[];
  filters: KeyValueObject<FilterMetadata> = {}; // {color: {value: ['Black'], matchMode: 'in'}};

  optionsProperties: any = {
    hasToolbar: true,

  }

  constructor(
    private httpClientService:HttpClientService,
    private route : ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService
  ) { 
    this.
    route.
    params.
    subscribe(params => {
      return params
    console.log(params)
    });
  }
  toolbarConfig: ToolbarConfig;
  loading: boolean = false;


  ngOnInit() {

    this.httpClientService.getparcelDetails().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );

     const self = this;

     this.toolbarConfig = {
       counter: true,
       get quickFilter(): boolean {
         return self.optionsProperties.filterable;
       },
       selectionLimit: null
     };
     
     this.cols = this.getColls();
  }

  private getColls(): ColumnConfig[] {
    return [
      {
        field: 'parcelID', header: 'Parcel ID', editable: false
      },
      {
        field: 'cname', header: 'Company Name', editable: false
      },
      {
        field: 'r_time', header: 'Receive Time', editable: false
      }
    ]
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
  
  items = [
    {
      name: 'Dashboard',
      link:'\employeedashboard',
      id: 1
    },
    {
      name: 'History',
      link:'\parcelhistory',
      id: 2
    },
    {
      name: 'Logout',
      link: '\logout',
      //action: this.temp(),
      id: 3
    }
  ]
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

