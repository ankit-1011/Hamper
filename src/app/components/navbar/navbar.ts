import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ShoppingCart } from 'lucide-angular/src/icons';
import { AuthService } from '../../services/login';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {

  isOpen = false;
  cartCount:number =0;

  constructor(private router: Router,public auth: AuthService,private cartService:CartService) {}

  ngOnInit() {
    isOpen: false;
    this.cartService.cartCount.subscribe(count => {
      this.cartCount = count;
    });
  }

goToProducts() {
  this.router.navigateByUrl('/products');console.log(this.router.url);
}

navigateTo(path: string) {
  this.isOpen = false;
  this.router.navigate([path]);
}


}
