import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { BrandsComponent } from './Pages/brands/brands.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { OrderComponent } from './Pages/order/order.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { authGuard } from './guards/auth.guard';
import { ProductDetailsComponent } from './Pages/products/components/product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotPasswordComponent } from './Pages/login/forgetPasswordComponent/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:"", redirectTo:"home" ,pathMatch:'full'},
  {path:"home",  canActivate:[authGuard], component : HomeComponent},
  {path:"wishlist", canActivate:[authGuard], component : WishlistComponent},
  {path:"products", canActivate:[authGuard], component : ProductsComponent},
  {path:"product-details/:id", canActivate:[authGuard], component : ProductDetailsComponent},
  {path:"categories", canActivate:[authGuard], component : CategoriesComponent},
  {path:"brands", canActivate:[authGuard], component : BrandsComponent},
  {path:"checkout/:cartId", canActivate:[authGuard], component: CheckoutComponent},
  {path:"allorders", canActivate:[authGuard], component: OrderComponent},
  



  
  {path:"login",component: LoginComponent},
  {path:"forgetPassword",component: ForgotPasswordComponent},
  {path:"register",component: RegisterComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  







  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
