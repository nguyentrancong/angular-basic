import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../types/responseData';
import { Category } from '../types/category';

@Injectable({ providedIn: 'root' })
export class CategoryServices {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<ResponseData<Category[]>> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/categories');
  }
}
