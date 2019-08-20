import { CategoryComponent } from './category/category.component';
import { HeroDetailComponent } from './../../../angular-tour-of-heroes/src/app/hero-detail/hero-detail.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';




const routes: Routes = [
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'category/:id', component: CategoryComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



