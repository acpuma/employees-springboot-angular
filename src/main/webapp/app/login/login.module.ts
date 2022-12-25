import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from "./login.route";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class LoginModule {
}
