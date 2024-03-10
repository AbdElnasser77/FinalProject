import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseUrl: string = 'https://route-ecommerce.onrender.com';

  constructor(private _httpClient:HttpClient) { }


  addToWishList(Id:string|undefined): Observable<any>{
    return this._httpClient.post(this.baseUrl + `/api/v1/wishlist`,{
      productId: Id,
    })
  }

  getWishList():Observable<any>{
    return this._httpClient.get(this.baseUrl + `/api/v1/wishlist`)
  }

  removeFromWishList(id:string|undefined): Observable<any>{
    return this._httpClient.delete(this.baseUrl + `/api/v1/wishlist/${id}`  );
  }
}