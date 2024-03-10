import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/Shared Services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{

  @Input() product: Product = {} as Product;
  @Input() wishlistData:string[] = [];
  
  constructor(private _cartService:CartService,private _toastService:ToastrService,private _wishlistService:WishlistService){
  }


  addToCart(id:string){
    this._cartService.addToCart(id).subscribe({
      next:(data) =>{
        this._cartService.numOfCartItems.next(data.numOfCartItems);
        this._toastService.success(data.message);
        console.log(data);
      }
    })
  }

  getWishlist(){
    this._wishlistService.getWishList().subscribe({
      next:(data)=>{
        const newData = data.data.map((item:any) => item._id);
      }
    })
  }

  addToWishlist(id:string|undefined){
    this._wishlistService.addToWishList(id).subscribe({
      next:(data:any) =>{
        console.log(data);
        this._toastService.success(data.message);
        console.log(this.wishlistData);
        this.wishlistData=data.data;
      }
    })
  }
  removeFromWishList(id:string){
    this._wishlistService.removeFromWishList(id).subscribe({
      next:data=>{
        this._toastService.success(data.message);
        console.log(this.wishlistData);
        this.wishlistData=data.data;

      }
    })
  }
}
