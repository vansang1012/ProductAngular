import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  result: any;
  productId;
  product: Product;
  constructor(
    private productService: ProductsService,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: '',
      code: '',
      available: '',
      price: ''
    });
    this.activateRouter.params.subscribe(params => {
      this.productId = params.id;
      console.log(this.productId);
    });
    this.productService.getDetail(this.productId).subscribe(product => this.product = product);
  }
  onSubmit() {
    const { value } = this.updateForm;
    console.log(value);
    this.productService.update(this.productId, value).subscribe(messagage => {
      this.result = messagage;
      alert(this.result);
      this.router.navigate(['']);
    });



  }

}
