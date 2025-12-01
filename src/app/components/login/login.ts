import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../services/login';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports:[ReactiveFormsModule,NgIf],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {

  loginForm!: FormGroup;   // declare only
  loading = false;
  errorMsg = "";

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    if (this.loginForm.invalid) {
      this.errorMsg = "Please enter valid details";
      return;
    }

    this.loading = true;
    this.errorMsg = "";

    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;

    const avatar = "https://api.dicebear.com/9.x/thumbs/svg?seed=Ankit";

    const success = this.auth.login(avatar, email, password);

    if (success) {
      this.loading = false;
      this.router.navigate(['/']);
    } else {
      this.loading = false;
      this.errorMsg = "Invalid email or password";
    }
  }
}
