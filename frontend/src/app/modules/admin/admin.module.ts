import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProductCategoryComponent } from './admin-product-category/admin-product-category.component';
import { AdminComponent } from './admin/admin.component';
import { NewCategoryComponent } from './admin-product-category/new-category/new-category.component';
import { NewProductComponent } from './admin-product/new-product/new-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [AdminProductComponent, AdminProductCategoryComponent, AdminComponent, NewCategoryComponent, NewProductComponent]
})
export class AdminModule { }
