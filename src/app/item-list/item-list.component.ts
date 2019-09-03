import { CartItem } from './../cartItem';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Item } from '../Item';
import { IncomingMessage } from 'http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  count: number = 0;
  items: Item[] = [];
  searchText: string;
  constructor(private appService: AppServiceService) {

  }

  
  ngOnInit() {
    
    this.appService.getCategory1Item().subscribe(success => {
      this.appService.items = success.data.map(rawItem => {
        let temp = new Item();
        temp.id = rawItem.product_id;
        temp.categoryid = rawItem.category_id;
        temp.name = rawItem.name;
        temp.price = rawItem.price;
        temp.img = rawItem.img_url;
        return temp;
      })
      this.items=this.appService.items
     
      
    });
   this.items=this.appService.items;
  
  
  
  }

  SortedArray() {

    var sortArray= this.appService.items.sort((a, b) => { return <any>new String(a.name) - <any>new String(b.name); })
    this.items=sortArray;

  }
  onAddToCartClick(item: any) {
 
    if(this.appService.cart.length==0)
    {
      let cartItem =new CartItem();
        cartItem.item=item;
        cartItem.quantity=1;
        this.appService.cart.push(cartItem)
    }
    else
    {
    let index=this.appService.cart.findIndex(i => i.item.id==item.id)
    console.log(index)
    if(index !=-1)
    {
      this.appService.cart[index].quantity++;
    }
    else
    {
      let cartItem =new CartItem();
      cartItem.item=item;
      cartItem.quantity=1;
      this.appService.cart.push(cartItem)
    }
  
    
    
  }
  console.log(this.appService.cart)
}


}
