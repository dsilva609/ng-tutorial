import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { ICartState, CartStore } from "./cart.store";

@Injectable({ providedIn: "root" })
export class CartQuery extends QueryEntity<ICartState> {
  constructor(protected store: CartStore) {
    super(store);
  }
}
