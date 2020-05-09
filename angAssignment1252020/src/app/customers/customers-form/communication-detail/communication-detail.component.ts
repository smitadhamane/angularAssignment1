import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-communication-detail',
  templateUrl: './communication-detail.component.html',
  styleUrls: ['./communication-detail.component.scss']
})
export class CommunicationDetailComponent implements OnInit {
  mobile;
  email;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private _formData : SharedService, private  router :Router) { }

  ngOnInit(): void {
    if(this._formData.ediID)
      {this.mobile = this._formData.customerEditabledata.mobile;
    this.email = this._formData.customerEditabledata.email;
      } else {
        this.mobile = '';
    this.email = '';
      }
  }
  commData(commDetails) {

    this._formData.communicationData(commDetails.value);
 
 
  }


}
