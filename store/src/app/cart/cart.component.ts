import { AuthQuery } from './../auth/state/auth.query';
import { CartQuery } from './state/cart.query';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './state/cart.service';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items$ = this.cartQuery.selectAll();
  count$ = this.cartQuery.selectCount();
  total$ = this.cartQuery.selectTotal$;

  constructor(
    private cartQuery: CartQuery,
    private authQuery: AuthQuery,
    private router: Router,
    private cartService: CartService
  ) {}

  remove(productId: ID) {
    this.cartService.remove(productId);
  }

  checkout() {
    if (this.authQuery.isLoggedIn()) {
      //  checkout
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
