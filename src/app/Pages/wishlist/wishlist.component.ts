import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Shared Services/cart.service';
import { Cart } from 'src/app/cart/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { WishlistService } from 'src/app/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  product: Product[] = [];
  
  constructor(private _wishlistService:WishlistService , private _cartService:CartService,private _toastService:ToastrService) { }

  ngOnInit(): void {
    this.getWishlist();
  }


  getWishlist(){
    return this._wishlistService.getWishList().subscribe({
      next:data=>{
        this.product = data.data;
      }
    })
  }


  addToCart(id:string){
    this._cartService.addToCart(id).subscribe({
      next:data =>{
        console.log(data);
        this._toastService.success(data.message);
        this.removeFromWishList(id);
      }
    })
  }


  removeFromWishList(id:string){
    this._wishlistService.removeFromWishList(id).subscribe({
      next:data =>{
        this.getWishlist();
      }
    })
  }
}
