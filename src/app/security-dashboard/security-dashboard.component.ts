import { Component, OnInit, Inject, TemplateRef, ViewChild } from '@angular/core';
import { HttpClientService, ParcelDatabase } from '../http-client.service';
import { AuthenticationService } from '../authentication.service';
import { AdaptModalService, ModalDeferred } from '@bmc-ux/adapt-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnConfig,  DataCellTemplateParams, ToolbarConfig, RowData, hasRowGroupedData } from '@bmc-ux/adapt-table';
import { FilterMetadata } from 'primeng/api';
import { KeyValueObject } from '@bmc-ux/adapt-angular/public-api';
@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.scss']
})
export class SecurityDashboardComponent implements OnInit {
  @ViewChild('bTemplate', { static: true }) bTemplate: TemplateRef<DataCellTemplateParams>;
  public ParcelDatabases: string[];
  public cols: ColumnConfig[];

  modalPromise: ModalDeferred;

  private parcelID: string;
  filters: KeyValueObject<FilterMetadata> = {}; // {color: {value: ['Black'], matchMode: 'in'}};


  optionsProperties: any = {
    hasToolbar: true,
    disableRowSelection: true,
    disabledSomeRows: true,


  }
  toolbarConfig: ToolbarConfig;
  loading: boolean = false;

  constructor(
    private httpClientService: HttpClientService,
    private authentication: AuthenticationService,
    private _modalService: AdaptModalService,
    private route: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit() {


    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response)


    );
    this.disabledRowSelectionResolver=this.disabledRowSelectionResolver.bind(this);
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
  disabledRowSelectionResolver(rowData: RowData<ParcelDatabase>): boolean {
  return true;
  }

  private getColls(): ColumnConfig[] {
    return [
      {
        field: 'parcelID', header: 'Parcel ID', editable: false
      },
      {
        field: 'empId', header: 'Employee ID', editable: false
      },
      {
        field: 'cname', header: 'Company Name', editable: false
      },
      {
        field: 'r_time', header: 'Receive Time', editable: false
      },
      {
        field: 'rack', header: 'Rack', editable: false,
      },
      {
        field: 'note', header: 'Note', editable: false
      },
      {
        field: 'd_time', header: 'Deliver Time', editable: false
      },
      {
        field: 'status', header: 'Status', editable: false
      },
      {
        field: '', header: 'Check', editable: false, filterable:false, 
        cellTemplate: this.bTemplate

      },
      
    ]
  }
  private checkStatus(status)
  {
    console.log(status);
  }
  open(config, dataItem) {
    this.parcelID = dataItem.parcelID;
    this.modalPromise = this._modalService.open(config);
    this.modalPromise.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed with: ${reason}`);
    });
  }

  public handoverParcel(recID) {
    const user: ParcelDatabase = new ParcelDatabase();
    alert(this.parcelID);
    alert(recID);
    user.parcelID = this.parcelID;
    user.recId = recID;
    this.httpClientService.handoverParcel(user).subscribe(data => {
      alert("Receiver details added successfully");
    });
    this.modalPromise.reject("hsdjh")
  }

  handleSuccessfulResponse(response) {
    this.ParcelDatabases = response;
    console.log("***********************" + this.ParcelDatabases[0].valueOf());
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
      name: 'Collect Parcel',
      link: '\orders',

      id: 1
    },
    {
      name: 'Logout',
      link: '\logout',
      //action: this.temp(),
      id: 2
    }
  ]


}




