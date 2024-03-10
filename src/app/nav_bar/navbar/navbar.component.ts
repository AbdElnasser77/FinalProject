import { Component } from '@angular/core';
import { CartService } from 'src/app/Shared Services/cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  numOfCartItems:number = 0;

  

  constructor(private _auth : AuthService,private _cartService:CartService) {
    
    _auth.userToken.subscribe({
      next:() => {
        
          if(_auth.userToken.getValue()){
            this.isLoggedIn = true;
          }else{
            this.isLoggedIn = false;
          }
      }
    })

    this._cartService.numOfCartItems.subscribe(res =>{
      
      this.numOfCartItems = res;
    })
  }


  logOut(){
    this._auth.logOut();
  }

}
