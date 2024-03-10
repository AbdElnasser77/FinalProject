import { Component, OnInit } from '@angular/core';
import { CartService } from '../Shared Services/cart.service';
import { Cart } from './interfaces/cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails: Cart = {} as Cart;

  constructor(private _cartService: CartService) {  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._cartService.getCart().subscribe({
      next: data => {
        this.cartDetails = data;
        console.log(this.cartDetails);
        
      }
    })
  }

  updateProductCount(count:number,id:string){
    this._cartService.updateProductCount(count,id).subscribe({
      next:(data)=>{
        
        this.cartDetails = data;
      }
    })
  }

  deleteProduct(id:string){
    this._cartService.deleteProduct(id).subscribe({
      next:(data)=>{
        this.cartDetails = data;
      }
    })
  }


}
