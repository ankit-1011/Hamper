import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    console.log("Added to cart:", product);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
