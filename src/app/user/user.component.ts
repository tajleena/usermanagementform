import { Component, OnInit } from "@angular/core";
import { User } from "../user-data.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  userData = User;

  constructor() {}
  arrUser = [];
  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      // console.log(value);

      this.arrUser.push({
        id: JSON.parse(localStorage.getItem(key)).id,
        name: JSON.parse(localStorage.getItem(key)).name,
        emailId: JSON.parse(localStorage.getItem(key)).emailId,
        password: JSON.parse(localStorage.getItem(key)).password
      });
    }
  }
  delete(index) {
    this.arrUser.splice(index,1);
    
  localStorage.removeItem(index);
  }
}
