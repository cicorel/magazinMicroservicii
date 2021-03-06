import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/home/components/landing-page/landing-page.component';
import { ProductsComponent } from './modules/products/components/products/products.component';
import { SignupComponent } from './modules/authentication/components/signup/signup.component';
import { SigninComponent } from './modules/authentication/components/signin/signin.component';
import { ProfileComponent } from './modules/authentication/components/profile/profile.component';
import { ProfileEditComponent } from './modules/authentication/components/profile/profile-edit/profile-edit.component';
import { ProfileOverviewComponent } from './modules/authentication/components/profile/profile-overview/profile-overview.component';
import { ProfileAddressComponent } from './modules/authentication/components/profile/profile-address/profile-address.component';
import { ProductComponent } from './modules/products/components/product/product.component';
import { CartComponent } from './modules/cart/components/cart/cart.component';

// admin route import
import { AdminComponent } from './modules/admin/admin/admin.component';
import { AdminProductCategoryComponent } from './modules/admin/admin-product-category/admin-product-category.component';
import { AdminProductComponent } from './modules/admin/admin-product/admin-product.component';
import { NewCategoryComponent } from './modules/admin/admin-product-category/new-category/new-category.component';
import { NewProductComponent } from './modules/admin/admin-product/new-product/new-product.component';
const routes: Routes = [
    {
        path: 'home',
        component: LandingPageComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'products/:id',
        component: ProductComponent
    },
    {
        path: 'products/category/get/:id',
        component: ProductsComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    }
    ,
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            { path: 'overview', component: ProfileOverviewComponent },
            { path: 'edit', component: ProfileEditComponent },
            { path: 'address', component: ProfileAddressComponent },
            { path: '', redirectTo:'overview', pathMatch:"full" }
        ]
    }
    ,
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'product', component: AdminProductComponent },
            { path: 'product/new', component: NewProductComponent },
            { path: 'product/edit/:id', component: NewProductComponent },
            { path: 'product-category', component: AdminProductCategoryComponent },
            { path: 'product-category/new', component: NewCategoryComponent },
            { path: 'product-category/edit/:id', component: NewCategoryComponent },
            { path: '', redirectTo:'overview', pathMatch:"full" }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }