import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/login.service';
import { SharedService } from 'src/app/service/shared.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeRoutingModule } from './employee.routing.module';

@NgModule({
    imports: [CommonModule,FormsModule, ReactiveFormsModule, FormControl, EmployeeRoutingModule],
    declarations: [EmployeeListComponent, EmployeeFormComponent],
    providers: [AuthService, LoginService, SharedService]

})
export class Employee {

}