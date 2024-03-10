import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  apiError:string = '';
  isLoading:boolean = false;
  registerForm : FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3) ,Validators.maxLength(15)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z1-9]{3,8}$/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z1-9]{3,8}$/)]),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:this.checkRepasswordMatch})





  constructor(private _authService : AuthService , private _router:Router){
  }



  register(form : FormGroup){
    this.apiError = '';
    console.log(form);
    this.markControls(form);
    if(form.valid && !this.isLoading){
    this.isLoading = true;
      this._authService.register(form.value).subscribe({
        next:(data:any) =>{
          console.log(data);
          if(data.message == "success"){
            this._router.navigate(['/login'],)
          }
        },error:(err)=>{
          console.log(err);
          this.apiError = err.error.message;
          this.isLoading = false;
        }
      })
    }
  }
checkRepasswordMatch(dataForm:any){
  if(dataForm.get('password')?.value === dataForm.get('rePassword')?.value){
    return null;
  }else{
    dataForm.get('rePassword')?.setErrors({rePasswordMatch:'rePassword not Match Password'})
    return {rePasswordMatch:'rePassword not Match Password'}
  }
}

  markControls(form : FormGroup){
    Object.values(form.controls).forEach((control:any) => {
      control.markAsTouched();
      if(control.controls){
        this.markControls(control);
      }
    })
  }

}
