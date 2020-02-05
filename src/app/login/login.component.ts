import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../user-data.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  UserFormGroup: FormGroup;

  userData = User;

  ngOnInit() {
    this.UserFormGroup = this.formBuilder.group({
      emailId: ["", Validators.required],
      password: ["", Validators.required]
  });

}
signIn(){
   var check:Boolean=false;
        for(var i=0;i<this.userData.length;i++){
        if(this.UserFormGroup.controls.emailId.value==this.userData[i].emailId && this.UserFormGroup.controls.password.value==this.userData[i].password)
        {
          this.router.navigateByUrl('/user');
          //  console.log("passpass");
          check=true;
    break;
        }
      }
      if(check==false){alert("Invalid Email or Password!!");}
}
}