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

  productDelete(p: Product) {
    /*this.service.deleteProduct(id).subscribe((product) => {
      this.products.map((prod, index) => {
        if (prod.id === product.id) {
          this.products.splice(index, 1);
          this.productsRes = this.products;
        }
      });
    });*/
    this.service.deleteProduct(p.id).subscribe(() => {
      this.productsRes.splice(this.productsRes.indexOf(p), 1);
    });
  }
}
