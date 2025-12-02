import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
// ...existing imports...

@NgModule({
  // ...existing code...
})
export class AppModule {
  constructor(router: Router) {
    router.routeReuseStrategy.shouldReuseRoute = () => false;
    router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        router.navigated = false;
      }
    });
  }
}