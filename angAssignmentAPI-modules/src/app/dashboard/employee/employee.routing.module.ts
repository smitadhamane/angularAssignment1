import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';



const routes: Routes = [
    { path: 'employee', component: EmployeeComponent,
    children : [
      { path: '',  redirectTo: 'employee-list', pathMatch: 'full'   },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employee-form', component: EmployeeFormComponent}
    ]
    },
  
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
