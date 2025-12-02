import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {

  products: any[] = [];

  constructor(
    private productServices: Product,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productServices.getProducts().subscribe((res: any) => {
      this.products = res.products.map((p: any) => ({
        ...p,
        localCount: 0
      }));
    });
  }

  addProduct(p: any) {
    p.localCount += 1;
    this.cartService.addToCart(p);
  }

  removeProduct(p: any) {
    if (p.localCount > 0) {
      p.localCount -= 1;
      this.cartService.removeFromCart(p);
    }
  }
}
