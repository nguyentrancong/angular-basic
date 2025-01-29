import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../types/responseData';
import { Product } from '../types/product';

@Injectable({ providedIn: 'root' })
export class ProductServices {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/products');
  }
}
