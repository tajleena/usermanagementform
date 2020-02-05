import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {APP_LAZY_ROUTING} from './app.lazy.routing';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RouterModule,APP_LAZY_ROUTING ],
  declarations: [ AppComponent, HelloComponent, UserComponent, AddUserComponent, EdituserComponent, DeleteUserComponent, LoginComponent, SignUpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
