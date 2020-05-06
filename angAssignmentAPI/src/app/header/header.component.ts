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
   isLogin:boolean;
  constructor(private auth : AuthService, private route : Router, 
    private _setLogin: LoginService, private cookieService : CookieService) { }

  ngOnInit() {
     this.isLogin = this.auth.isAuthenticated();
     let token = this.cookieService.get('access_token');
     if(token) {
       this.isLogin = true;
     }
     
 
  }

  logOut() {
    this.cookieService.delete('access_token');
    this.isLogin = false;
    this.route.navigate(['/home']); 
  }

}
