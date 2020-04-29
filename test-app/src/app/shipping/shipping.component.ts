import { CartService } from "./../cart.service";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<Array<ShippingPrice>>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
export class ShippingPrice {
  price: number;
  type: string;
}
