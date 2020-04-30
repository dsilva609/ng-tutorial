import { Product } from "./../products";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";
import { CartItem } from "./cart.model";

export interface ICartState extends EntityState<Product, string> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "cart" })
export class CartStore extends EntityStore<ICartState> {
  constructor() {
    super();
  }
}
