import { Component } from '@angular/core';
import {AccountService} from "./core/auth/account.service";
import {Authority} from "./core/config/authority.constants";

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
    this.accountService.login(Authority.EDITOR);
  }

  loginReader() {
    this.accountService.login(Authority.READER);
  }
}
