import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  

export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
              private _rooter: Router){}
  canActivate(): boolean{
    if(this._authService.loggedIn()){
      return true
    }else{
      this._rooter.navigate([('/login')])
      return false
    }
  }


  
  
}
