import { Component, OnInit, Input } from '@angular/core';
import { AuthService} from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() chechname;
   isLogin:boolean; token; userRole;
   isAdminCheck;

  constructor(private auth : AuthService, private route : Router, 
    private _setLogin: LoginService, private cookieService : CookieService) { }

  ngOnInit() {
   
    
    this.token = localStorage.getItem('access_token');
     console.log(this.token);
     if(!this.token) {
       this.isLogin = false;
     }
     else{
      this.isLogin = true;
     }
 
  }
  
  logOut() {
   this.token = null;
   localStorage.removeItem('access_token');
   this.isLogin = false;
   this.route.navigate(['/home']); 
  }

}
