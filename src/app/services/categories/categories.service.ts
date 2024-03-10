import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getCatogeries() : Observable<any>{
    return this.http.get('https://route-ecommerce.onrender.com/api/v1/categories');
  }

  getCategory(id:string): Observable<any>{
    return this.http.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`);
  }
  
}
