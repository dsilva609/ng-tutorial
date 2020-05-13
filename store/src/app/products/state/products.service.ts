import { BaseProduct, Product } from './../../product/state/product.model';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ProductsStore } from './products.store';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private productsStore: ProductsStore) {}

  getAll(term: string, filters) {
    const prods = [{ id: '' }];

    //return this.http
    //.get<BaseProduct[]>(`${API}/products`, { term, ...filters })
    //.pipe(tap((products) => this.productsStore.setActive(products)));

    this.productsStore.setActive(prods);

    return prods;
  }

  getProduct(productId: ID) {
    return of({
      id: productId,
    });
    //  return this.http
    //  .get<Product>(`${API}/product/${id}`)
    //.pipe(tap((product) => this.productsStore.upsert(id, product)));
  }

  updateFilters(filters) {
    this.productsStore.update({ filters });
  }

  updateSearchTerm(searchTerm: string) {
    this.productsStore.update({ searchTerm });
    this.invalidateCache();
  }

  invalidateCache() {
    this.productsStore.setHasCache(false);
  }
}
