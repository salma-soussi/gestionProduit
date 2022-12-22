import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private ar: ActivatedRoute, private service: ProduitService) {}
  product!: Product;
  ngOnInit(): void {
    let id = this.ar.snapshot.params['id'];
    this.service.getProduct(id).subscribe((data) => (this.product = data));

  }
}
