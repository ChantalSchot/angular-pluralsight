import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private httpClient: HttpClient) {}

 getProducts(): Observable<IProduct[]> {
   return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
     tap(data => JSON.stringify(data)),
     catchError(this.handleError)
   );
  }

  getProductById(id: number): Observable<IProduct | undefined > {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(product => product.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurded: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
