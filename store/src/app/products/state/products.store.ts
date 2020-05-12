import {
  EntityStore,
  StoreConfig,
  HashMap,
  ID,
  EntityState,
} from '@datorama/akita';
import { Product } from 'src/app/product/state/product.model';
import { Injectable } from '@angular/core';

export interface ProductsState extends EntityState<Product> {
  cachedIds: HashMap<ID>;
  filters: {
    condition: string;
    location: string;
    deliveryOption: boolean;
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super({
      searchTerm: '',
      filters: {
        condition: null,
        location: null,
        deliveryOption: false,
      },
    });
  }

  updateCachedIds(id: ID) {
    this.update((state) => ({
      cachedIds: { ...state.cachedIds, [id]: true },
    }));
  }
}
