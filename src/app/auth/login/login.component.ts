import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  login(): void {
    const data = this.loginForm.value;

    this.authService.login({
      'un': data.email,
      'pw': data.password,
    }).subscribe(data => {
      if(data['logged_in'] == true) {
          this.router.navigate(['/home']);
      }
    });
  }
}
