import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.scss']
})
export class SecurityDashboardComponent implements OnInit {
  public ParcelDatabases:string[];

  constructor(
    private httpClientService:HttpClientService
    
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
 
  }

  
  handleSuccessfulResponse(response)
{
    this.ParcelDatabases=response;
}



}
