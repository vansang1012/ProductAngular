import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  message: any;
  constructor(private router: Router, private productService: ProductsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: '',
      code: '',
      available: '',
      price: ''
    });
  }
  onSubmit() {
    const { value } = this.createForm;
    this.productService.create(value).subscribe(message => {
      this.message = message;
      alert(this.message);
      this.router.navigate(['']);
    });
  }

}
