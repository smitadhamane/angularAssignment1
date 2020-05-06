import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable, from } from 'rxjs';
import { LoginService } from './service/login.service';
import { AuthService} from './service/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate   {
  userRole;
  constructor(private _loginData : LoginService , private auth : AuthService, private router :Router, 
    
    ){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     

      if (this.auth.isAuthenticated()) {
      
        return true;
    }

    // If not, they redirect them to the login page
    this.router.navigate(['/login']);
    return false;
  }
  
}
