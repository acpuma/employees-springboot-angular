import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AccountService} from "./account.service";

@Injectable({providedIn: 'root'})
export class UserRouteAccessService implements CanActivate{

  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    let url: string = state.url;
    return this.checkUserLogin(route,  url);
  }

  private checkUserLogin(route: ActivatedRouteSnapshot, url: string): boolean {
    if (this.accountService.isLoggedIn()) {
      const userRole = this.accountService.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        return false;
      }
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
