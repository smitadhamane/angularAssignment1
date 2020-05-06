import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerList, EmployeeList } from '../model/data.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  ediID; editableID;
  customerEditabledata = new CustomerList();
 employeeEditabledata = new EmployeeList();

  urldata = 'http://localhost:3000/customers';
  empurl = 'http://localhost:4000/employee'

  formData1 = {}; formData2 = {}; formData3 = {};
  finalFormdata; employeeData;

  constructor(private route: Router, private http: HttpClient) {


  }


  editableGetData(customer) {
    this.ediID = customer.id;
    console.log(customer);
    this.editID(customer.id);
    return this.customerEditabledata = Object.assign({}, customer)
  }
  editableEmpData(employee) {
    this.ediID = employee.id;
    console.log(employee);
    this.editID(employee.id);
    return this.employeeEditabledata = Object.assign({}, employee)
  }
  editID(id) {
    return this.editableID = id;
  }


  getCustomerData(): Observable<CustomerList[]> {
    return this.http.get<CustomerList[]>(this.urldata);

  }

  deleteData(id) {
    return this.http.delete(this.urldata + '/' + id);
  }


  primaryData(value) {
    this.formData1 = value;

  }
  secondaryData(value) {
    this.formData2 = value;

  }
  communicationData(value) {
    this.formData3 = value;
    this.finalFormdata = Object.assign(this.formData1, this.formData2, this.formData3);
    this.route.navigate(['/dashboard/customers/customers-list']);
    if (this.ediID) {

      this.http.put<CustomerList[]>(this.urldata + '/' + this.ediID, this.finalFormdata).subscribe();

    } else
      this.http.post<CustomerList[]>(this.urldata, this.finalFormdata).subscribe();
  }

  getEmployeeData(): Observable<EmployeeList[]> {
    return this.http.get<EmployeeList[]>(this.empurl);

  }
  employeeFormdata(value) {
    this.employeeData = value;
    this.route.navigate(['/dashboard/employee/employee-list']);
    if (this.ediID) {

      this.http.put<EmployeeList[]>(this.empurl + '/' + this.ediID, this.employeeData).subscribe();

    } else
    this.http.post<EmployeeList[]>(this.empurl, this.employeeData).subscribe();

  }
  deleteEmpData(id) {
    return this.http.delete(this.empurl + '/' + id);
  }


}
