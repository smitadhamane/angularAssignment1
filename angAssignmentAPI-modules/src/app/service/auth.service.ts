import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
userRole;
  constructor(private cookieService : CookieService, private loginservice: LoginService) { }


  
 isAuthenticated() {
  // get the auth token from localStorage
    console.log(this.userRole);


  let token = this.cookieService.get('access_token')


  // check if token is set, then...
  if (token) {
      return true;
  }

  return false;
}
}
