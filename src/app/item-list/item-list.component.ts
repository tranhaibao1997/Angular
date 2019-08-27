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
      this.items = success.data.map(rawItem => {
        let temp = new Item();
        temp.id = rawItem.product_id;
        temp.categoryid = rawItem.category_id;
        temp.name = rawItem.name;
        temp.price = rawItem.price;
        temp.img = rawItem.img_url;
        return temp;
      })
     
      
    });
  }

  SortedArray() {

    return this.items.sort((a, b) => { return <any>new String(a.name) - <any>new String(b.name); })

  }
  onAddToCartClick(item: any) {
    let cartItem =new CartItem();
    cartItem.item=item;
    cartItem.quantity=1;
    this.appService.cart.push(cartItem)
    
  }


}
