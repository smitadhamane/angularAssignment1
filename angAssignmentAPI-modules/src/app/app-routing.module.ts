import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AuthguardGuard } from './authguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { CustomersListComponent } from './dashboard/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './dashboard/customers/customers-form/customers-form.component';
import { PrimaryDetailComponent } from './dashboard/customers/customers-form/primary-detail/primary-detail.component';
import { SecondaryDetailComponent } from './dashboard/customers/customers-form/secondary-detail/secondary-detail.component';
import { CommunicationDetailComponent } from './dashboard/customers/customers-form/communication-detail/communication-detail.component';
import { EmployeeListComponent } from './dashboard/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './dashboard/employee/employee-form/employee-form.component';




const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'   },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
 
  { path: 'dashboard', 
  canActivate : [AuthguardGuard],
  component:  DashboardComponent,

},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
