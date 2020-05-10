import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { Role } from '../model/role.model';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate : [AuthguardGuard],
  
    children: [
      { path: '', redirectTo: 'employee-list', pathMatch: 'full' }, 
     { path: 'employee-list', component: EmployeeListComponent},
     { path: 'employee-form', component: EmployeeFormComponent}
    ]
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
