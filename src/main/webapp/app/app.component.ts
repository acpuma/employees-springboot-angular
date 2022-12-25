import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AccountService} from "./core/auth/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, OnInit {
  title = 'Employees';
  username: String | null = null;

  constructor(protected accountService: AccountService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout() {
    this.accountService.logout();
    this.login();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.accountService.isAuthenticated().pipe().subscribe(user => (this.username = user));
    if (this.username == null) {
      this.login();
    }
  }

}
