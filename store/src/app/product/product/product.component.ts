import { BaseProduct } from './../state/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: BaseProduct;
}
