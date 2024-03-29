import { products, Product } from "./../products";
import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
