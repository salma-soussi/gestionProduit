import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent implements OnInit {
  products!:Product[];
  constructor(private service:ProduitService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>this.products=data)
  }
}
