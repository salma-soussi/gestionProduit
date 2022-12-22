import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  host = 'http://localhost:8085/restapiproduit';

  constructor(private client: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(this.host + '/all');
  }
  public getAllCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(this.host + '/allCategories');
  }
  public getProduct(id: number): Observable<Product> {
    return this.client.get<Product>(this.host + '/one/' + id);
  }

  public deleteProduct(id: number): Observable<Product> {
    return this.client.delete<Product>(this.host + '/delete/' + id);
  }
  public addProduct(fd: FormData): Observable<Product> {
    return this.client.post<Product>(this.host + '/add', fd);
  }
}
