import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _http:HttpClient) { 
    this.getCart().subscribe({
      next:(res)=>{
      this.numOfCartItems.next(res.numOfCartItems);
        
      }
    })
    
  }

  addToCart(id:string):Observable<any>{
    return this._http.post(`https://route-ecommerce.onrender.com/api/v1/cart`,{
      productId:id
    }
    )
  }

  getCart():Observable<any>{
    return this._http.get(`https://route-ecommerce.onrender.com/api/v1/cart`)
  }

  updateProductCount(x:number,id:string):Observable<any>{
    return this._http.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
      count:x
    }
    );
  }

  deleteProduct(id:string):Observable<any>{
    return this._http.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`
    );
  }
  payCart(_shippingAddress:any,id:string):Observable<any>{
    return this._http.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress: _shippingAddress
    }
    );
  }


}
