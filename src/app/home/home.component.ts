import { AppServiceService } from './../app-service.service';
import { Item } from './../Item';
import { ITEMS } from './../mock-data';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  items:Item[]=ITEMS;
  count:number;
  constructor(private appService: AppServiceService)
  {
    
  }
  ngOnInit()
  {
    this.count=this.appService.cart.length;
  }

  onAddToCartClick(item: any)
  {
    this.count=this.appService.cart.length;
    console.log(this.appService.cart.length)
    return this.count
  }
 

  
}
