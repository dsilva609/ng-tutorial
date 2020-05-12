import { ID } from '@datorama/akita';
import { Product } from 'src/app/product/state/product.model';

export interface CartItem {
  productId: ID;
  quantity: number;
  title: Product['title'];
  price: Product['additionalData']['price'];
  total: number;
}

export function createCart(params: Partial<CartItem>) {
  return {} as CartItem;
}
