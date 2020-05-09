import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-detail',
  templateUrl: './secondary-detail.component.html',
  styleUrls: ['./secondary-detail.component.scss']
})
export class SecondaryDetailComponent implements OnInit {
  address;
  order;
  orderPattern = "[0-9]+"; 
  constructor(private _formData : SharedService, private router : Router) { }

  ngOnInit() {
    console.log(this._formData.ediID);
    
    if(this._formData.ediID) {
    this.address = this._formData.customerEditabledata.Address;
    this.order = this._formData.customerEditabledata.order_total;
    }else {
      this.address = '';
      this.order = '';
    }
  }
  onSubmitSecondary(secDetails) {
   
    this._formData.secondaryData(secDetails.value);

    if(this._formData) {
      this.router.navigate(['/customers/customers-form/communication-detail']);
    }
  }
}
