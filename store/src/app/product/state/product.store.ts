import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ProductState extends EntityState<Product> {
  searchTerm: string;
  filters: {
    condition: string;
    location: string;
    deliveryOption: boolean;
  };
}

const initialState = {
  searchTerm: '',
  filters: {
    condition: null,
    location: null,
    deliveryOption: false,
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<ProductState, Product> {
  constructor() {
    super(initialState);
  }
}
