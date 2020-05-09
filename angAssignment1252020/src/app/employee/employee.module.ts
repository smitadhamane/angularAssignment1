import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent, EmployeeComponent],  
  imports : [CommonModule, FormsModule, ReactiveFormsModule,EmployeeRoutingModule ]
})
export class EmployeeModule { }
