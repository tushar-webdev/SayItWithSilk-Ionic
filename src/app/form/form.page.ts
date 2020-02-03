import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  UserName: string = "";
  UserEmail: string = "";
  UserMobileNumber: number;
  constructor(private router: Router) {
    console.log("Form Page....")
   }

  ngOnInit() {
  }
  getData() {
    if (!this.UserName) {
      console.log(`No Name is ${this.UserName}`);
    }
    if (!this.UserEmail) {
      console.log(`No Email is ${this.UserEmail}`);
    }
    if (!this.UserMobileNumber) {
      console.log(`No Number is ${this.UserMobileNumber}`);
    } else {
      console.log(` Name is ${this.UserName}`);
      console.log(`Email is ${this.UserEmail}`);
      console.log(`Number is ${this.UserMobileNumber}`);
      setTimeout(() => {
        console.log("GO next....Page3");
        this.router.navigate(["page3",{'name':this.UserName,'email':this.UserEmail,'phone':this.UserMobileNumber}]);
      }, 100);
    }
  }
}
