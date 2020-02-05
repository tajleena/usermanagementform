import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {User} from '../../user-data.model';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
    userData=User;
    editUserFormGroup:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder, private activateRouter:ActivatedRoute) { }

  Uid;
 
  ngOnInit() {
    this.Uid=this.activateRouter.snapshot.paramMap.get("id");
    
     this.editUserFormGroup=this.formBuilder.group({
      name:[JSON.parse(localStorage.getItem(this.Uid)).name,Validators.required],
      emailId:[JSON.parse(localStorage.getItem(this.Uid)).emailId,Validators.required],
    password:[JSON.parse(localStorage.getItem(this.Uid)).password,Validators.required]
  });
  }
   onEditAccount()
  {
    let data={id:this.Uid,name:this.editUserFormGroup.value.name,emailId:this.editUserFormGroup.value.emailId,password:this.editUserFormGroup.value.password};

    localStorage.removeItem(this.Uid);
    localStorage.setItem(this.Uid,JSON.stringify(data));
    this.router.navigate(['/user']);
    
    console.log(this.editUserFormGroup.value)
  }
  }

