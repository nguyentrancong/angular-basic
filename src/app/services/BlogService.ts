import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../types/responseData';
import { ProductItem } from '../types/productItem';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<ResponseData<ProductItem[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
    //   .subscribe(({ data, message }) => {
    //     console.log(`----data: ${data}`);
    //   });
  }
}
