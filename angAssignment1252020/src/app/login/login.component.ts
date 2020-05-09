import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth.service';
import { LoginDetails } from '../model/data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginData = [];
isLogin ;
isValidate = false;

myname = "login";
username; password; 
userRole;
  constructor(private _loginDetail : LoginService, private route : Router, 
    private _setLogin : LoginService, private cookieService : CookieService, 
    private auth :AuthService,
    ) {   }

  ngOnInit() {
    this.loginData = this._loginDetail.loginDetails();
  
  }

getformData(logDetails) {
 //console.log(logDetails.value);

  this.loginData.forEach(element => {
    if (logDetails.value.username === element.username &&
      logDetails.value.password === element.password ) {
      localStorage.setItem('access_token',  element.role);
      console.log(element.role);
      this.auth.userRole = element.role;
      this.isValidate = false;
      if(element.role === "customer" || element.role === "admin" ) {
        this.route.navigate(['/customers/customers-list']);
      }
      if(element.role === "employee"){
      this.route.navigate(['/employee/employee-list']);
     }
   
    }
    else {
      console.log('Please Try Again');
      this.isValidate = true;
    }
  });
  }


}
