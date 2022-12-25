import {Injectable} from '@angular/core';
import {Login} from "../../login/login.model";
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AccountService} from "./account.service";

@Injectable({
  providedIn: 'root'
})
export class AuthServerProvider {
  protected resourceUrl = "http://localhost:8080/api/"

  constructor(private http: HttpClient) {
  }

  login(credentials: Login): Observable<boolean> {
    const data =
      `username=${encodeURIComponent(credentials.username)}` +
      `&password=${encodeURIComponent(credentials.password)}` +
      '&submit=Login';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<boolean>(this.resourceUrl + "authentication", data, {headers});
  }

  logout(): Observable<void> {
    return this.http.post(this.resourceUrl + "logout", {}).pipe(
      map(() => {
        this.http.get(this.resourceUrl + "account").subscribe();
      })
    )
  }
}
