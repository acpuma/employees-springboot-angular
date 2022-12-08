import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {Authority} from "../config/authority.constants";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLogin = false;
  roleAs: string | null = null;
  login(value:string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem(Authority.STATE, 'true');
    localStorage.setItem(Authority.ROLE, this.roleAs);
    return of({success: this.isLogin, role: this.roleAs});
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem(Authority.STATE, 'false');
    localStorage.setItem(Authority.ROLE, '');
    return of({success: this.isLogin, role: ''});
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem(Authority.STATE);
    if (loggedIn == 'true') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem(Authority.ROLE);
    return this.roleAs;
  }

  public isEditor() {
    return this.getRole()===Authority.EDITOR;
  }
}
