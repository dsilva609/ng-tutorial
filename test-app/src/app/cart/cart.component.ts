import { Product } from "./../products";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CartService } from "./cart.service";
import { of } from "rxjs";
import { CartQuery } from "./cart.query";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  checkoutForm: FormGroup;
  items = of<Array<Product>>();

  constructor(
    private cartService: CartService,
    private cartQuery: CartQuery,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: "",
    });
  }

  ngOnInit(): void {
    this.items = this.cartQuery.selectAll();
  }

  removeItem(id: string): void {
    this.cartService.removeItem(id);
  }

  onSubmit(customerData): void {
    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
  }
}
