import { CartQuery } from "./../cart/cart.query";
import { Product, products } from "./../products";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart/cart.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cartQuery: CartQuery
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get("productId")];
    });
  }

  addToCart(product: Product): void {
    let id: string = (Math.floor(Math.random() * 10000000) + 1).toString();
    let prod: Product = new Product(
      id,
      product.description,
      product.name,
      product.price
    );
    this.cartService.addToCart(prod);

    //window.alert("Your product has been added to the cart!");
  }
}
