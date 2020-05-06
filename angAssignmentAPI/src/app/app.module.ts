import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './service/login.service';
import { AuthService} from './service/auth.service'
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { CustomersListComponent } from './dashboard/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './dashboard/customers/customers-form/customers-form.component';
import { PrimaryDetailComponent } from './dashboard/customers/customers-form/primary-detail/primary-detail.component';
import { SecondaryDetailComponent } from './dashboard/customers/customers-form/secondary-detail/secondary-detail.component';
import { CommunicationDetailComponent } from './dashboard/customers/customers-form/communication-detail/communication-detail.component';

import { EmployeeFormComponent } from './dashboard/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './dashboard/employee/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CustomersComponent,
    EmployeeComponent,
    CustomersListComponent,
    CustomersFormComponent,
    PrimaryDetailComponent,
    SecondaryDetailComponent,
    CommunicationDetailComponent,
    EmployeeListComponent,
    EmployeeFormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
