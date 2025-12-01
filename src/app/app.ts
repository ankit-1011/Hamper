import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  NavbarComponent } from './components/navbar/navbar';
import { Products } from './pages/products/products';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,Products,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
