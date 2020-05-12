import { CartItem } from './cart.model';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartStore, CartState } from './cart.store';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState, CartItem> {
  selectTotal$ = this.selectAll().pipe(
    map((items) => items.reduce((acc, item) => acc + item.total, 0))
  );

  constructor(protected store: CartStore) {
    super(store);
  }
}
