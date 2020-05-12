import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/state/products.service';
import { ProductsQuery } from '../products/state/products.query';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  filters: FormGroup;

  constructor(
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) {
    this.filters = new FormGroup({
      condition: new FormControl(),
      location: new FormControl(),
      deliveryOptions: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.filters.patchValue(this.productsQuery.filters);

    this.filters.valueChanges
      .pipe(tap(() => this.productsService.invalidateCache()))
      .subscribe((filters) => this.productsService.updateFilters(filters));
  }
}
