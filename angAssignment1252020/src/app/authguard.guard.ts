import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { Observable, from } from 'rxjs';
import { LoginService } from './service/login.service';
import { AuthService} from './service/auth.service'


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate   {
 currentURL;
  constructor(private _loginData : LoginService ,
     private auth : AuthService, private router :Router, 
     private route1:ActivatedRoute
    ){
   
    }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //const roles = route.data.roles as Role[];
    const currentRole = localStorage.getItem('access_token');
    var currentUserURLs =  this.auth.access_control[currentRole];
    //console.log(currentUserURLs);
    this.currentURL= state.url;
   // console.log(this.currentURL);
    

    console.log(currentUserURLs.some(x => x === this.currentURL));
      if (this.auth.isAuthenticated() && currentUserURLs.some(x => x === this.currentURL)) {
       
        return true;
    }
     
   
  //   if (roles && !roles.some(r => this.auth.hasRole(r))) {
        
  //     return false;
  // }
    // If not, they redirect them to the login page
    this.router.navigate(['/login']);
    return false;
  }


  
}
