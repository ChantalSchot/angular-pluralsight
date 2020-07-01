import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  rating: string;
  private _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(value) : this.products;
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  public onRatingClicked(message: string) {
    if (this.rating) {
      this.rating = '';
    } else {
      this.rating = message;
    }
  }
}
