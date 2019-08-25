import { AppServiceService } from './app-service.service';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule }    from '@angular/common/http';

//const rountes:Routes=[
  //{path:'',component:AppComponent},
  //{path: 'item/:itemId', component: ItemDetailComponent},
  

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailComponent,
    ShoppingCartComponent,
    HomeComponent,
    NavigationBarComponent,
    ItemListComponent,
    CategoryComponent,
    HeaderComponent
    
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  
    
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


