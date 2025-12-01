import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ShoppingCart } from 'lucide-angular/src/icons';
import { AuthService } from '../../services/login';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, LucideAngularModule,ReactiveFormsModule,FormsModule], 
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],              
})
export class NavbarComponent {

  readonly shoppingCart = ShoppingCart

  constructor(public auth: AuthService) {}

 logout() {
    this.auth.logout();
  }
}
