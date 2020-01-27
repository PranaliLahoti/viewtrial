import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ParcelDatabase {
  constructor(
    public empId:string,
    public parcelID:string,
    public salary:string,
    public cname:string,
    public rack:string,
    public note:string,
    public r_time:string,
    public d_time:string,
    public status:string,
    public ephone:string,
    public email:string,
    public recId:string,
    public recname:string,
    public recphone:string

  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    var token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization : token});   
    return this.httpClient.get<ParcelDatabase[]>('http://localhost:8080/securitydashboard',{headers});
  }

  public createEmployee(ParcelDatabases) {
    return this.httpClient.post<ParcelDatabase>("http://localhost:8080/securitydashboard", ParcelDatabases);
  }
  getparcelDetails()
  {
    console.log("test call");
    var token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization : token});   
    
    return this.httpClient.get<ParcelDatabase[]>('http://localhost:8080/employeedashboard',{headers});
  }

  public collectParcel(ParcelDatabases){
    console.log("###################"+ParcelDatabases.parcelID);
    var token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization : token});   
    
    return this.httpClient.post<ParcelDatabase>("http://localhost:8080/employeedashboard", ParcelDatabases,{headers});
  }

  getparcelHistory()
  {
    console.log("test call");
    var token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization : token});   
   
    return this.httpClient.get<ParcelDatabase[]>('http://localhost:8080/parcelhistory',{headers});
  }
  public handoverParcel(ReceiverDatabases) {
       
    console.log("++++++++++++++"+ReceiverDatabases.parcelID);
    return this.httpClient.post<ParcelDatabase>("http://localhost:8080/securitydashboard", ReceiverDatabases);
  }
 
}