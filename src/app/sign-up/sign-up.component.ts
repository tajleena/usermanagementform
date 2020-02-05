import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from  '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {User} from '../user-data.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFormGroup:FormGroup;
  userData=User;

  // addStudentFormGroup:FormGroup;
  // id=this.userData.length+1;


    constructor(private router:Router,private formBuilder:FormBuilder, private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    this.signUpFormGroup=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required]
    });
    
  }
  onAddUser()
{
    if((this.signUpFormGroup.controls.id.value=="")&&(this.signUpFormGroup.controls.name.value=="")&&(this.signUpFormGroup.controls.emailId.value=="")&&(this.signUpFormGroup.controls.password.value==""))
    {
      alert("Please Enter details");
    }
    else
    { 
      let data = {id:this.signUpFormGroup.value.id,name:this.signUpFormGroup.value.name, emailId:this.signUpFormGroup.value.emailId, password: this.signUpFormGroup.value.password};
        localStorage.setItem(this.signUpFormGroup.value.id,JSON.stringify(data));
        console.log(localStorage);
        this.router.navigate(["/user"]);
        }
      
      }
    

}
