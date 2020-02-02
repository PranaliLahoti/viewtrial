import { Component, OnInit } from '@angular/core';
import { HttpClientService, ParcelDatabase } from '../http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-handoverpage',
  templateUrl: './handoverpage.component.html',
  styleUrls: ['./handoverpage.component.scss']
})
export class HandoverpageComponent implements OnInit {

  user: ParcelDatabase = new ParcelDatabase();
 
  constructor(
    private httpClientService: HttpClientService,
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
  }
  handoverParcel(): void {
    this.user.parcelID=this.route.snapshot.paramMap.get("parcelID");
    alert(this.user.parcelID);
   
    this.httpClientService.handoverParcel(this.user)
        .subscribe( data => {
          alert("Receiver details added successfully");
          //alert(this.user.parcelID);
          //this.user.setParcelID(this.route.snapshot.paramMap.get("parcelID"));
          this.router.navigateByUrl('/securitydashboard');
        });
       
  };
  

}
