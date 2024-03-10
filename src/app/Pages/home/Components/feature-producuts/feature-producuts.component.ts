import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-feature-producuts',
  templateUrl: './feature-producuts.component.html',
  styleUrls: ['./feature-producuts.component.css']
})
export class FeatureProducutsComponent implements OnInit{

  allProducts : Product[] = [];
  wishlistData:string[] = [];
  searchToken : string =  '';
  constructor(private _products:ProductsService, private _wishlistService:WishlistService){
    
  }

  ngOnInit(): void {
    this.getAllProducuts();
    this.getWishlist();
  }


  getAllProducuts(){
    this._products.getAllProducts().subscribe({
      next:data => {
        this.allProducts = data.data;
      }
    })
  }

    getWishlist(){
      this._wishlistService.getWishList().subscribe({
        next:(data)=>{
          const newData = data.data.map((item:any) => item._id);
          this.wishlistData = newData;
          console.log(this.wishlistData);
        }
      })
    }
}
