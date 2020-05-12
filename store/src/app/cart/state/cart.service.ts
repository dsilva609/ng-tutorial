import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CartStore } from './cart.store';
import { Product } from 'src/app/product/state/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: CartStore) {}

  add(product: Product, quantity: number) {
    this.cartStore.upsert(product.id, {
      title: product.title,
      price: product.additionalData.price,
      total: product.additionalData.price * quantity,
      quantity,
    });
  }

  remove(productId: ID) {
    this.cartStore.remove(productId);
  }
}
