import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, EMPTY } from 'rxjs';
import { BaseProduct } from '../product/state/product.model';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../products/state/products.service';
import { ProductsQuery } from '../products/state/products.query';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  products$: Observable<BaseProduct[]>;

  constructor(
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.productsQuery.selectLoading();
    this.products$ = this.productsQuery.selectAll();

    combineLatest([
      this.productsQuery.selectHasCache(),
      this.productsQuery.selectFilter$,
      this.productsQuery.selectSearchTerm$,
    ])
      .pipe(
        switchMap(([cached, filters, term]) => {
          return cached
            ? EMPTY
            : this.productsService.getAll(term as string, filters);
        })
      )
      .subscribe({
        error() {
          //  show
        },
      });
  }
}
