import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { AuthenticationService } from '../authentication.service';
import { ColumnConfig, ToolbarConfig } from '@bmc-ux/adapt-table';
import { FilterMetadata } from 'primeng/api';
import { KeyValueObject } from '@bmc-ux/adapt-angular/public-api';

@Component({
  selector: 'app-parcel-history',
  templateUrl: './parcel-history.component.html',
  styleUrls: ['./parcel-history.component.scss']
})
export class ParcelHistoryComponent implements OnInit {
ParcelDatabases:string[];
public cols: ColumnConfig[];
filters: KeyValueObject<FilterMetadata> = {}; // {color: {value: ['Black'], matchMode: 'in'}};
optionsProperties: any = {
  hasToolbar: true,

}
  constructor(
    private httpClientService:HttpClientService,
    private authentication: AuthenticationService
  ) { }
  toolbarConfig: ToolbarConfig;
  loading: boolean = false;

  ngOnInit() {

    this.httpClientService.getparcelHistory().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
     this.cols = this.getColls();
     const self = this;

     this.toolbarConfig = {
       counter: true,
       get quickFilter(): boolean {
         return self.optionsProperties.filterable;
       },
       selectionLimit: null
     };
    
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
        field: 'recId', header: 'Receive ID', editable: false
      },
      {
        field: 'd_time', header: 'Deliver Time', editable: false
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
      link: '\employeedashboard',
      id: 1
    },
    {
      name: 'Logout',
      link: '\logout',
      //action: this.temp(),
      id: 2
    }
 ]

    
  handleSuccessfulResponse(response)
  {
      this.ParcelDatabases=response;
  }

}
