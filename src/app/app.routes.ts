import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { Login } from './components/login/login';
import { Products } from './pages/products/products';



export const routes: Routes = [
  { path: 'products', component: Products },
  { path: '', component: Home },
  { path: 'cart', component: Cart },
  { path: 'login', component: Login }
];
 