import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private API_URL='https://dummyjson.com/products';

  constructor(private http:HttpClient){}

  getProducts():Observable<any>{
    return this.http.get(this.API_URL);
  }

   getProduct(id:number):Observable<any>{
    return this.http.get(`${this.API_URL}/${id}`);
  }

   searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.API_URL}/search?q=${query}`);
  }
}
