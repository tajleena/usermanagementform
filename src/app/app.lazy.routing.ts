
import { Routes, RouterModule, PreloadAllModules,NoPreloading } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const APP_LAZY_ROUTES: Routes = [
   {
     path: '', component: LoginComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
     path: 'user/add', component: AddUserComponent
  },
  {
     path: 'user/edit/:id', component: EdituserComponent
     
  },
  {
     path: 'user/delete', component: DeleteUserComponent
  },
 
  {
     path: 'signup', component: SignUpComponent
  }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});