import { BaseProduct } from './../../product/state/product.model';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ProductsStore } from './products.store';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {}

  getAll(term: string, filters) {
    return this.http
      .get<BaseProduct[]>(`${API}/products`, { term, ...filters })
      .pipe(tap((products) => this.productsStore.set(products)));
  }

  getProduct(id: ID) {
    return this.http
      .get<BaseProduct[]>(`${API}/product/${id}`)
      .pipe(tap((product) => this.productsStore.upsert(id, product)));
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
