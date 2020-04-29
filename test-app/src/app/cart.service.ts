import { ShippingPrice } from "./shipping/shipping.component";
import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Array<Product> = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItemCount(): number {
    return this.items.length;
  }

  getItems(): Array<Product> {
    return this.items;
  }

  getShippingPrices(): Observable<Array<ShippingPrice>> {
    return this.http.get<Array<ShippingPrice>>("/assets/shipping.json");
  }

  clearCart(): Array<Product> {
    this.items = [];

    return this.items;
  }
}
