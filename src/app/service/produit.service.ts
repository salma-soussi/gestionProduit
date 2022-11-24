import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  host="http://localhost:8085/restapiproduit"

  constructor(private client:HttpClient) { }

  public getAllProducts():Observable<Product[]>{
    return this.client.get<Product[]>(this.host+"/all");
  }
}
