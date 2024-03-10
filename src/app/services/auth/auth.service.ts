import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from 'src/app/interfaces/login';
import { Register } from 'src/app/interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private _httpClient:HttpClient , private _router: Router) {

    if(localStorage.getItem("userToken")){
      this.userToken.next(JSON.stringify(localStorage.getItem("userToken")));
    }

  }

  setUserToken(){ 
    let token = JSON.stringify(localStorage.getItem('userToken'))
    this.userToken.next(token);
  }

  register(form : Register){
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, form);
  }

  login(form : Login){
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,form);
  }

  logOut(){
    localStorage.removeItem('userToken');
    this.userToken.next('');
    this._router.navigate(['/login']);
  }

  forgotPassword(form:any){
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/forgotPasswords`,form)
  }
  verifyCode(form:any){
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/verifyResetCode`,form)
  }
  resetPassword(form:any){
    return this._httpClient.put(`https://route-ecommerce.onrender.com/api/v1/auth/resetPassword`,form)
  }


}
