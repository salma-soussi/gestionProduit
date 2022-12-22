import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
})
export class AjoutComponent implements OnInit {
  constructor(private service: ProduitService, private router: Router) {}

  categories!: Category[];
  file!: File;

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onSubmit(f: NgForm) {
    let fd = new FormData();
    let product: Product = f.value;
    fd.append('file', this.file);
    fd.append('produit', JSON.stringify(product));
    this.service
      .addProduct(fd)
      .subscribe(() => this.router.navigate(['/list']));
  }

  selectImage(x: any) {
    this.file = x.target.files[0];
  }
}
