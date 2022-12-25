import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from "rxjs";
import {Authority} from "../config/authority.constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(protected http: HttpClient) {
  }

  protected resourceUrl = "http://localhost:8080/api/users/"
  isLogin = false;
  roleAs: string | null = null;
  protected username: string | null = null;
  private authenticationState = new ReplaySubject<String | null>(1);


  login(value: string) {
    this.findAuth(value).subscribe(auths => {
      console.log("Login User : " + value + " : " + JSON.stringify(auths));
      this.isLogin = true;
      this.roleAs = auths[0] as string;
      this.username = value;
      this.authenticationState.next(this.username);
      console.log("RoleAs: " + this.roleAs)
      localStorage.setItem(Authority.STATE, 'true');
      localStorage.setItem(Authority.ROLE, this.roleAs);
      return of({success: this.isLogin, role: this.roleAs});
    })
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem(Authority.STATE, 'false');
    localStorage.setItem(Authority.ROLE, '');
    this.authenticationState.next(null);
    return of({success: this.isLogin, role: ''});
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem(Authority.STATE);
    console.log("LoggedIn : " + loggedIn);
    this.isLogin = loggedIn == 'true';
    return this.isLogin;
  }

  getUsername() {
    return this.username;
  }

  public isAuthenticated(): Observable<String | null> {
    return this.authenticationState.asObservable();
  }

  getRole() {
    this.roleAs = localStorage.getItem(Authority.ROLE);
    return this.roleAs;
  }

  public isEditor() {
    return this.getRole() === Authority.EDITOR;
  }

  findAuth(login: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.resourceUrl}auth/${login}`);
  }
}
