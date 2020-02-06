import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {User} from '../../user-data.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

 userData=User;

addUserFormGroup:FormGroup;
id=this.userData.length+1;
  constructor(private router:Router,private formBuilder:FormBuilder) { }
    arrUser = [];

  ngOnInit() {
    this.addUserFormGroup=this.formBuilder.group({
      id:[this.id,Validators.required],
    name:['',Validators.required],
    emailId:['',Validators.required],
    password:['',Validators.required]
    })
  }
  onAddStudent()
  {
    let data = {id:this.addUserFormGroup.value.id,name:this.addUserFormGroup.value.name, emailId:this.addUserFormGroup.value.emailId, password: this.addUserFormGroup.value.password};
        localStorage.setItem(this.addUserFormGroup.value.id,JSON.stringify(data));
        this.arrUser.push();
        console.log(localStorage);
        this.router.navigate(["/user"]);
  }

}