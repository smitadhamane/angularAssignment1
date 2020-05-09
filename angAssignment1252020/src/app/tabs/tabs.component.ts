import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  changeClass;employee;customer;
  isLogin;
  token;
  constructor( private cookie :CookieService) { }

  ngOnInit(){
   let token = localStorage.getItem('access_token');
     console.log(this.token);
     if(token) {
       this.isLogin = false;
     }
     else{
      this.isLogin = true;
     }
   
  }
  addClass() {
    this.changeClass = !this.changeClass ;
   }
    isAdmin(){
    let token = localStorage.getItem('access_token');
    if(token === "admin" ) {
      return true;
    }
  }
}
