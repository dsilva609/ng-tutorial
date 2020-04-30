import { CartStore } from "./cart.store";
import { ShippingPrice } from "../shipping/shipping.component";
import { Injectable } from "@angular/core";
import { Product } from "../products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Array<Product> = [];

  constructor(private http: HttpClient, private cartStore: CartStore) {}

  addToCart(product: Product): void {
    this.cartStore.add(product);

    // this.items.push(product);
  }

  // getItemCount(): number {
  //   return this.items.length;
  // }

  // getItems(): Array<Product> {
  //   return this.items;
  // }

  removeItem(id: string): void {
    this.cartStore.remove(id);
  }

  getShippingPrices(): Observable<Array<ShippingPrice>> {
    return this.http.get<Array<ShippingPrice>>("/assets/shipping.json");
  }

  clearCart(): Array<Product> {
    this.items = [];
    this.cartStore.reset();

    return this.items;
  }
}
