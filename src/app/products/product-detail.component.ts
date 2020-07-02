import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = 'Product detail: ';
  product: IProduct;
  imageWidth = 150;
  imageMargin = 10;
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const param = +this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getProduct(id);
    }

  }

  getProduct(id: number) {
    this.productService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
