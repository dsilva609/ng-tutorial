import { AuthService } from './../state/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string | null = null;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    this.error = null;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: ({ name }) => {
          this.toastr.success(`Welcome ${name}`);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.error = error.error.errorMsg;
        },
      });
    }
  }
}
