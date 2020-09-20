import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  loggedInUser: any;
  constructor(private router: Router, private loginService: LoginService) {
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      this.loginService.userDetails.subscribe(loggedInUser => {
        this.loggedInUser = loggedInUser;
       }
       );

      if (this.loggedInUser)
      {
        return true;
      }
      return this.router.navigate(['error']);
  }
}
