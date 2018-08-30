import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUserData = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onRegister() {
    // console.log(this.registeredUserData)
    this.authService.registerUser(this.registeredUserData).subscribe(result => {
      if (result) {
        console.log(result);
      }
    }, err => {
      console.log(err);
    });
  }

}
