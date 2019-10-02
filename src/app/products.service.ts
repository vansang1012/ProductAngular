import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = 'http://127.0.0.1:8000/api/products';
  constructor(private http: HttpClient) { }
  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  create(product: Product) {
    return this.http.post('http://127.0.0.1:8000/api/store', product);
  }
  delete(id: number) {
    return this.http.delete('http://127.0.0.1:8000/api/destroy/' + id);
  }
  update(id: number, product: Product) {
    return this.http.put('http://127.0.0.1:8000/api/update/' + id, product);
  }
  getDetail(id: number): Observable<Product> {
    return this.http.get<Product>('http://127.0.0.1:8000/api/products' + '/' + id);
  }
}
