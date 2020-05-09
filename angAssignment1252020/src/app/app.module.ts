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


import { TabsComponent } from './tabs/tabs.component';
// import { EmployeeModule } from './employee/employee.module';
// import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    
    TabsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // EmployeeModule,
    // CustomersModule
  ],
  providers: [LoginService, AuthService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
