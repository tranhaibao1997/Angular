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
    
    this.cart=this.appService.cart; 
    this.count=this.appService.cart.length;
    
    console.log(this.total)
  }
 
}

 
  
 


