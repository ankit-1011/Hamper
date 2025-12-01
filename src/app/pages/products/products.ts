import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnInit {


  products: any[]=[];

  constructor(private productServices : Product,
    private cartService: CartService
  ){}
  
  ngOnInit(){
    this.productServices.getProducts().subscribe((res : any)=>{
      this.products = res.products;
      console.log(this.products);
    });

  } 


  addProduct(p: any) {
    this.cartService.addToCart(p);
  }

  orderPlaced(){
    alert("Added to Cart!");
  }
}
