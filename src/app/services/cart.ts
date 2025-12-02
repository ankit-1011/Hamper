import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cartItems: any[] = [];

  cartCount = new BehaviorSubject<number>(0);

  addToCart(product: any) {
    let existing = this.cartItems.find((p: any) => p.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.cartCount.next(
      this.cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0)
    );
  }

  removeFromCart(product: any) {
    let existing = this.cartItems.find((p: any) => p.id === product.id);

    if (!existing) return;

    if (existing.quantity > 1) {
      existing.quantity -= 1;
    } else {
      this.cartItems = this.cartItems.filter((p: any) => p.id !== product.id);
    }

    this.cartCount.next(
      this.cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  }

  updateQuantity(productId: number, change: number) {
    let item = this.cartItems.find((p: any) => p.id === productId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
      this.cartItems = this.cartItems.filter((p: any) => p.id !== productId);
    }

    this.cartCount.next(
      this.cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter((p: any) => p.id !== productId);

    this.cartCount.next(
      this.cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  }

  getCartItems() {
    return this.cartItems;
  }


}
