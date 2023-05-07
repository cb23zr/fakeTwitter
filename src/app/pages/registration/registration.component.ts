import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    signupForm = new FormGroup({
      email: new FormControl(''),
      psw: new FormControl(''),
      repsw: new FormControl(''),
      uname: new FormControl(''),
      name: new FormGroup({
        fname: new FormControl(''),
        lname: new FormControl(''),
      }),
    });

    constructor(private location: Location) {
    }

    OnSubmit(){

   }

   Back(){
     this.location.back();
   }

}
