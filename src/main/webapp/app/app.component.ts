import { Component } from '@angular/core';
import {AccountService} from "./core/auth/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';

  constructor(private accountService: AccountService) {
  }

  loginEditor() {
    this.accountService.login("admin");
  }

  loginReader() {
    this.accountService.login("user");
  }
}
