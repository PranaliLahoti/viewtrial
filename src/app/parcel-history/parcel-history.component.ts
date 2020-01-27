import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-parcel-history',
  templateUrl: './parcel-history.component.html',
  styleUrls: ['./parcel-history.component.scss']
})
export class ParcelHistoryComponent implements OnInit {
ParcelDatabases:string[]
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {

    this.httpClientService.getparcelHistory().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
 
  }
  handleSuccessfulResponse(response)
  {
      this.ParcelDatabases=response;
  }

}
