import { Product } from "./../products";
import { CartService } from "./../cart.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  checkoutForm: FormGroup;
  items: Array<Product>;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: "",
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData): void {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
  }
}
