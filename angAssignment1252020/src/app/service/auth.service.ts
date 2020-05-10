import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { LoginDetails } from '../model/data.model';
import { Role } from '../model/role.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
userRole;

loginURL = "http://localhost:5000/logindetails";
  constructor(private cookieService : CookieService, 
    private loginservice: LoginService, private http: HttpClient ) {
      
     }
 isAuthenticated() {
  // get the auth token from localStorage
  let token = localStorage.getItem('access_token');
console.log(token);

  // check if token is set, then...
  if (token) {
      return true;
  }
  return false;
}
access_control =  {
	admin :
			["/customers/customers-list", "/employee/employee-list"],
	customer :	
			["/customers/customers-list"],
	employee :
		["/employee/employee-list"]
}


isAdmin() {
  console.log(this.userRole);
  
 if (this.userRole === "admin") { 
   return true;
 }
   return false;
}
}
