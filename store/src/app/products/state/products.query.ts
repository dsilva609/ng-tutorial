import { Injectable } from '@angular/core';
import { QueryEntity, ID, filterNil } from '@datorama/akita';
import { ProductsStore, ProductsState } from './products.store';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/product/state/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<ProductsState, Product> {
  selectFilter$ = this.select('filters');
  selectSearchTerm$ = this.select('searchTerm');

  constructor(protected store: ProductsStore) {
    super(store);
  }

  get filters() {
    return this.getValue().filters;
  }

  get searchTerm() {
    return this.getValue().searchTerm;
  }

  hasProduct(id: ID) {
    return this.hasEntity(id) && !!this.getEntity(id).additionalData;
  }

  selectProduct(id: ID) {
    return this.selectEntity(id).pipe(
      filterNil,
      filter(({ additionalData }) => !!additionalData)
    );
  }
}
