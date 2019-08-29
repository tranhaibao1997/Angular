import { CartItem } from './../cartItem';


import { AppServiceService } from './../app-service.service';
import { Item } from './../Item';
import { Component, OnInit } from '@angular/core';

import {HomeComponent} from '../home/home.component'



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart:any[];
  total:number=0;
  count:number=0;
  constructor(private appService: AppServiceService)
  {
   
   
  }
 
   
  ngOnInit() {
    
    this.filterCartItem();
    this.totalCaculate();
  }

  filterCartItem()
  {
   const uniq=new Set(this.appService.cart.map(e => JSON.stringify(e)));
   var res=Array.from(uniq).map(e=>JSON.parse(e));
   this.cart=res;
  }

  totalCaculate()
  {
   this.cart.forEach(item => 
    {
         this.total+=item.item.price * item.quantity
    }
    )
  }
 
}

 
  
 


