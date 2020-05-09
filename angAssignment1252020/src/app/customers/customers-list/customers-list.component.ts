import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import  { CustomerList } from '../../model/data.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
getCustomers = [];
  constructor(private _customerList : SharedService,  private route : Router ) { }

  ngOnInit() {
    // this.getCustomers = this._customerList.customersList;
    //  console.log(this.getCustomers)
   
    this._customerList.getCustomerData().subscribe((data: CustomerList[]) =>{
      this.getCustomers = data;
    });
  }

  deletedata(id){
    var result = window.confirm("You want to delete this item?")
   
    if(result){
    this._customerList.deleteData(id).subscribe();}
  }

  editdata(customer) {
   
    this._customerList.editableGetData(customer);
    // this._customerList.editableData.emit(customer);
    this.route.navigate(['/customers/customers-form']);
  }
  clearData(){
    this._customerList.editableID = null;
  }

}
