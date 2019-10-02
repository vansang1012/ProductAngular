import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.productService.getList().subscribe(data => this.products = data);
  }
  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => this.products = this.products.filter(t => t.id !== id));
  }

}

