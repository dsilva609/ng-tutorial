import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/state/products.service';
import { ProductsQuery } from '../products/state/products.query';
import { Product } from '../product/state/product.model';
import { CartService } from '../cart/state/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products$ = this.productsQuery.selectProduct(this.productId);
  quantity: FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toastr: ToastrService,
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) {
    this.quantity = new FormControl(1);
  }

  get productId() {
    return this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.productsQuery.hasProduct(this.productId) === false) {
      this.productsService.getProduct(this.productId).subscribe({
        error() {
          // show
        },
      });
    }
  }

  addToCart(product: Product) {
    this.cartService.add(product, this.quantity.value);
    this.toastr.success('Added to cart');
  }
}
