import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ProductStore } from './product.store';
import { Product } from './product.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private productStore: ProductStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Product[]>('https://api.com').pipe(tap(entities => {
      this.productStore.set(entities);
    }));
  }

  add(product: Product) {
    this.productStore.add(product);
  }

  update(id, product: Partial<Product>) {
    this.productStore.update(id, product);
  }

  remove(id: ID) {
    this.productStore.remove(id);
  }
}
