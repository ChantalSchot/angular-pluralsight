import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = 'Product detail of';
  @Input()
  product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
