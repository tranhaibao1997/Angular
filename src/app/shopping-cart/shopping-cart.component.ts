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

  cart:CartItem[] = [];
  total:number=0;
  count:number=0;
  constructor(private appService: AppServiceService)
  {
   
   
  }
 
   
  ngOnInit() {
    
    this.cart=this.appService.cart;
    // this.totalCaculate();
    
  }

  

  totalCaculate()
  {
   this.cart.forEach(item => 
    {
         this.total+=item.item.price * item.quantity
    }
    )
  }
  deleteItem(x)
  {
    console.log(x)
    this.cart.splice(x,1);
    this.appService.count=this.cart.length;
  }
  
 
}

 
  
 


