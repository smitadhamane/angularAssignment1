import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { EmployeeList } from 'src/app/model/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employeeList = [];
  constructor(private shareService :SharedService, private route : Router) { }

  ngOnInit() {
 
this.shareService.getEmployeeData().subscribe((data : EmployeeList[]) => {
this.employeeList = data;
console.log(this.employeeList);

});
  }

  deleteData(id) {
    var result = window.confirm("You want to delete this item?")
   
    if(result){
    this.shareService.deleteEmpData(id).subscribe();
    }
  }

  editdata(employee) {
   
    this.shareService.editableEmpData(employee);
    // this._customerList.editableData.emit(customer);
    this.route.navigate(['/dashboard/employee/employee-form']);
  }
  clearData(){
    this.shareService.editableID = null;
  }
}
