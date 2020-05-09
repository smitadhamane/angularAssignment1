import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route  } from '@angular/router';
import { Observable, from } from 'rxjs';
import { LoginService } from './service/login.service';
import { AuthService} from './service/auth.service'
import { Role } from './model/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate   {
 
  constructor(private _loginData : LoginService ,
     private auth : AuthService, private router :Router, 
    
    ){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const roles = route.data.roles as Role[];
    
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/login']);
        return false;
    }
    if (roles && !roles.some(r => this.auth.hasRole(r))) {
        
      return false;
  }
    // If not, they redirect them to the login page
    
    return true;
  }


  
}
