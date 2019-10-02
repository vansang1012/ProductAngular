import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './create/create.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  { path: '', component: ProductComponent },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
