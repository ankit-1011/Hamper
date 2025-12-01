import { Component, NgModule, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { FormsModule } from '@angular/forms';
import { SlicePipe ,CommonModule} from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,SlicePipe],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {

  cartItems: any[] = [];

  price = 0;
  shippingFee = 0;
  taxPercent = 18;
  tax = 0;
  totalAmount = 0;

  deliveryAddress = "Noida Sector 62";
  paymentMethod = "Cash On Delivery";

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.updateTotals();
  }

  updateTotals() {
    this.price = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    this.shippingFee = this.price > 500 ? 0 : 40;
    this.tax = Math.round((this.price * this.taxPercent) / 100);
    this.totalAmount = this.price + this.tax + this.shippingFee;
  }

  changeAddress() {
    alert("Address change logic");
  }

  placeOrder() {
    alert("Order placed successfully!");
  }
}
