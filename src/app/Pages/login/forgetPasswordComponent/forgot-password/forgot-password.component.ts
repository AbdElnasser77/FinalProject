import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  msg:any;
  forgetPassword : FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email])
  })

  constructor(private _auth:AuthService){
  }

  submit(form : FormGroup):void{
    this._auth.forgotPassword(form.value).subscribe({
      next:(data)=>{
        console.log(data);
      },error:(err)=>{
        console.log(err);
      }
    })
    
  }
}
