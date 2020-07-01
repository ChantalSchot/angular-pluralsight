import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  rating: string;
  errorMessage: string;
  private _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
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
    if (this.rating === message) {
      this.rating = '';
    } else {
      this.rating = message;
    }
  }
}
