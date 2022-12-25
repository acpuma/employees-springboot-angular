import {AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../core/auth/account.service";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterViewChecked {
  @ViewChild('username', {static: false})
  authenticationError = false;
  loginForm = new FormGroup({
    username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  });

  constructor(private accountService: AccountService, private loginService: LoginService,
              private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    /*
    if (this.accountService.isLoggedIn()) {
        this.router.navigate(['']);
    }*/
    this.authenticationError = false;
    console.log("HasError : " + this.authenticationError);
  }

  login(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        if (response) {
          console.log("Login OK");
          this.authenticationError = false;
          this.accountService.login(this.loginForm.getRawValue().username);
          this.router.navigate(['']);
        } else {
          this.authenticationError = true;
          console.log("Login failed : " + response);
          console.log("Response : " + response);
        }
      },
      error: () => (this.authenticationError = true),
    });
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }
}
