import { Component, OnInit } from '@angular/core';
import { ColumnConfig,  DataCellTemplateParams, ToolbarConfig, RowData, hasRowGroupedData } from '@bmc-ux/adapt-table';
import { FilterMetadata } from 'primeng/api';
import { KeyValueObject } from '@bmc-ux/adapt-angular/public-api';
import { HttpClientService, ParcelDatabase } from '../http-client.service';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-security-history',
  templateUrl: './security-history.component.html',
  styleUrls: ['./security-history.component.scss']
})
export class SecurityHistoryComponent implements OnInit {

  public ParcelDatabases: string[];
  public cols: ColumnConfig[];

  
  private parcelID: string;
  filters: KeyValueObject<FilterMetadata> = {}; // {color: {value: ['Black'], matchMode: 'in'}};


  optionsProperties: any = {
    hasToolbar: true,
   

  }
  toolbarConfig: ToolbarConfig;
  loading: boolean = false;

  constructor(
    private httpClientService: HttpClientService,
    private authentication: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit() {


    this.httpClientService.getSecurityHistory().subscribe(
      response => this.handleSuccessfulResponse(response)


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
        field: 'parcelID', header: 'Parcel ID', editable: false, sortable:false
      },
      {
        field: 'empId', header: 'Employee ID', editable: false, sortable:false

      },
      {
        field: 'cname', header: 'Company Name', editable: false, sortable:false

      },
      {
        field: 'r_time', header: 'Receive Time', editable: false, sortable:false

      },
      {
        field: 'd_time', header: 'Deliver Time', editable: false, sortable:false

      },
      {
        field: 'status', header: 'Status', editable: false, sortable:false

      },
      {
        field: 'time_diff', header: 'Time Difference', editable: false, 
      },
      
       ]
  }
  
  
  handleSuccessfulResponse(response) {
    this.ParcelDatabases = response;
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
  /*temp(){
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


}