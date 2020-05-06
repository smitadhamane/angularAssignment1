import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Customer } from './dashboard/customers/customer.module';
import { Employee } from './dashboard/employee/employee.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Employee,
    Customer,
    FormGroup, FormControl, Validators

  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
