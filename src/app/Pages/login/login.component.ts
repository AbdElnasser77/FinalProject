import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { password } from '@rxweb/reactive-form-validators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isLoading: boolean = false;
  apiError: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z1-9]{3,8}$/)]),
  })



  constructor(private _auth: AuthService, private _router: Router) { }
  login(form: FormGroup) {
    console.log(form);
    this.markTouched(form);
    this.apiError = '';
    if (form.valid && !this.isLoading) {
      this.isLoading = true;
      this._auth.login(form.value).subscribe({
        next: (data: any) => {
          console.log(data);
          if (data.message =='success') {
            localStorage.setItem('userToken', data.token);
            this._auth.setUserToken();
            this._router.navigate(["./home"]);
          }
        }, error: (err) => {
          console.log(err);
          this.isLoading = false;
          this.apiError = err.error.message;
        }
      })
    }

  }


  markTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markTouched(control);
      }
    })
  }
}
