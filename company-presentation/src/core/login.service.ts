import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Appconfig} from '../app/app.config';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  allUsers: any;
  private userDetailsSource = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
  userDetails = this.userDetailsSource.asObservable();

  constructor(private http: HttpClient) { }

    logIn = async (loggedInUserDetails) => {
      const allUsers = await this.getAllUsers();
      const loggedInUserDetailsencodedKey = btoa( loggedInUserDetails.password);
      const loggedInUser = allUsers.find(user =>
      user.encodedKey === loggedInUserDetailsencodedKey &&
      user.useremail === loggedInUserDetails.email);
      if (loggedInUser)
      {
        this.saveUserEmailIntoLocalStorage(loggedInUser);
        return true;
      }
      return false;
    }

     logOut = () => {
        localStorage.removeItem('user');
        this.userDetailsSource.next(JSON.parse(localStorage.getItem('user')));
     }

    async getAllUsers(): Promise<any> {
    return await this.http.get(Appconfig.baseApiUrl + `users`).toPromise();
    }

    saveUserEmailIntoLocalStorage = (logggedInUser: any) =>
    {
     localStorage.setItem('user', JSON.stringify(logggedInUser));
     this.userDetailsSource.next(logggedInUser);
    }
}
