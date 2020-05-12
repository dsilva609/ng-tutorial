import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductsService } from '../products/state/products.service';
import { ProductsQuery } from '../products/state/products.query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchControl: FormControl;

  constructor(
    private productsService: ProductsService,
    private productsQuery: ProductsQuery
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit(): void {
    this.searchControl.patchValue(this.productsQuery.searchTerm);

    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => this.productsService.updateSearchTerm(term));
  }
}
