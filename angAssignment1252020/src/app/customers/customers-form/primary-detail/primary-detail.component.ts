import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { CustomerList } from 'src/app/model/data.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-primary-detail',
  templateUrl: './primary-detail.component.html',
  styleUrls: ['./primary-detail.component.scss']
})
export class PrimaryDetailComponent implements OnInit {
  editData = new CustomerList();



  firstname;
  lastname;


  constructor(private router: Router, private _formData: SharedService) {




  }

  ngOnInit() {
    console.log(this._formData.editableID);

    if (this._formData.editableID) {
      this.firstname = this._formData.customerEditabledata.firstname;
      this.lastname = this._formData.customerEditabledata.lastname;
    } else {
      this.firstname = '';
      this.lastname = '';
    }

  }


  onSubmitPrimary(priDetails) {
    //this._formData.push(priDetails.value);

    this._formData.primaryData(priDetails.value);
    console.log(priDetails.value);

    if (this._formData) {
      this.router.navigate(['/customers/customers-form/secondary-detail']);
    }

  }


}
