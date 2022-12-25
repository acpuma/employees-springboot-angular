import {Injectable} from '@angular/core';
import {Login} from "./login.model";
import {mergeMap, Observable} from "rxjs";
import {AuthServerProvider} from "../core/auth/auth-session.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authServerProvider: AuthServerProvider) {
  }

  login(credentials: Login): Observable<boolean> {
    return this.authServerProvider.login(credentials);
  }
}
