import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginData = [];
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
 
 this.cookieService.set('access_token', "jwt_token");
  this.loginData.forEach(element => {
    if (logDetails.value.username === element.username &&
       logDetails.value.password === element.password ) {
      this.auth.userRole = element.role;
      
      this.route.navigate(['/dashboard/customers/customers-list']);
      this.isValidate = false;
  
    
    }
    else {
      console.log('Please Try Again');
      this.isValidate = true;
    }
  });
  }


}
