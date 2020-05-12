import { CartQuery } from './../cart/state/cart.query';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/state/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  cartCount$ = this.cartQuery.selectCount();

  constructor(
    private cartQuery: CartQuery,
    private router: Router,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
