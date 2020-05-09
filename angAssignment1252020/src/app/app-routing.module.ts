import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AuthguardGuard } from './authguard.guard';

import { TabsComponent } from './tabs/tabs.component';
import { Role } from './model/role.model';




const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'   },
  { path: 'login', component: LoginComponent },
  { path: 'tabs',component: TabsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customers' ,
   loadChildren :() => import('./customers/customers.module').then(m => m.CustomersModule)  },
  { path: 'employee',

  loadChildren :() => import('./employee/employee.module').then(m => m.EmployeeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
