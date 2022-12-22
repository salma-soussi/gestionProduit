import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../model/product';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent implements OnInit {
  products!: Product[];
  productsRes!: Product[];

  set y(a: string) {
    this.productsRes = this.filtrer(a);
  }
  filtrer(txt: string) {
    return this.products.filter((x) => x.nom.indexOf(txt) != -1);
  }
  constructor(private service: ProduitService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => {
      this.products = data;
      this.productsRes = data;
    });
  }
}
