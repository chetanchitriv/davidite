import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    loginId: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {}

  signup() {
    const data = this.signupForm.value;

    this.authService.signup({
      "lid": data.loginId,
      "fn": data.firstName,
      "ln": data.lastName,
      "eml": data.email,
      "bd": data.phone,
      "adr": data.address,
      "pwd": data.password  
    }).subscribe((data) => {
      if(
        data['logged_in'] == true &&
        data['onboard'] === true) {
          this.router.navigate(['/home']);
      }
    });
  }
}
