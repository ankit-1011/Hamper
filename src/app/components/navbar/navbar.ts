import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ShoppingCart } from 'lucide-angular/src/icons';
import { AuthService } from '../../services/login';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {

  isOpen = false;

  constructor(private router: Router,public auth: AuthService) {}

  readonly shoppingCart = ShoppingCart

  logout() {
    this.auth.logout();
  }

 reload() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/products']);
  });
}

}
