import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Shared Services/cart.service';
import { Details } from 'src/app/interfaces/details';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _activatedRoute:ActivatedRoute , private _productsService:ProductsService , private _cartService:CartService){
    this.productId = this._activatedRoute.snapshot.params['id'];
  }

  productId:string = '';

  productDetails: any = {};
  ngOnInit() {
    this.getProductId();
  }



  getProductId(){
    this._productsService.getProductDetails(this.productId).subscribe({
      next:(response) =>{
        this.productDetails = response.data;
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  addToCart(id:string){
    this._cartService.addToCart(id).subscribe({
      next:data =>{
        console.log(data);
      }
    })
  }



}
