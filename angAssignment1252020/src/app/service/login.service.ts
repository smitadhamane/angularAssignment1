import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from '../model/data.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token;
  emitNama = new EventEmitter();
  loginURL = "http://localhost:5000/logindetails";
  constructor( private http: HttpClient , private cookieService : CookieService) {
 
   
  }
 
  loginDetails() {
    return [
      {username: "admin" , password : "admin", role: "admin"},
      {username: "customer" , password : "customer",  role: "customer"},
      {username: "employee" , password : "employee",  role: "employee"},
    ];
  
  }



}
