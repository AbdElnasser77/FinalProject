import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { BrandsComponent } from './Pages/brands/brands.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { FeatureProducutsComponent } from './Pages/home/Components/feature-producuts/feature-producuts.component';
import { MainSliderComponent } from './Pages/home/Components/main-slider/main-slider.component';
import { CategoriesSliderComponent } from './Pages/home/Components/categories-slider/categories-slider.component';
import { NavbarComponent } from './nav_bar/navbar/navbar.component';
import { OrderComponent } from './Pages/order/order.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { LimitedNavbarComponent } from './nav_bar/limited-navbar/limited-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductItemComponent } from './Pages/home/Components/feature-producuts/Product Item/product-item/product-item.component';
import { ProductDetailsComponent } from './Pages/products/components/product-details/product-details.component';
import { SubCategoriesComponent } from './Pages/categories/sub-categories/sub-categories.component';
import { SearchPipe } from './pipes/search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './Pages/login/forgetPasswordComponent/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    FeatureProducutsComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    NavbarComponent,
    OrderComponent,
    WishlistComponent,
    LimitedNavbarComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SubCategoriesComponent,
    SearchPipe,
    CheckoutComponent,
    LoaderComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
