import { AdditionalData, Product } from './product.model';
import { Injectable } from '@angular/core';
import { QueryEntity, ID, filterNil } from '@datorama/akita';
import { ProductStore, ProductState } from './product.store';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState, Product> {
  selectFilter$ = this.select('filters');
  selectSearchTerm$ = this.select('searchTerm');

  constructor(protected store: ProductStore) {
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
