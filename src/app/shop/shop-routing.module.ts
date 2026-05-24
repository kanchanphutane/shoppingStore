import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollectionComponent } from './collection/collection.component';
import { CompareComponent } from './compare/compare.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SuccessComponent } from './success/success.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'shop', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/success', component: SuccessComponent },
  { path: 'product/details/:id', component: ProductDetailsComponent },
  { path: 'left-sidebar/collection/:category', component: CollectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
