import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-data';
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
    this.appService.getItemsFormService();
    this.items=this.appService.items;
  }

  SortedArray() {

    return this.items.sort((a, b) => { return <any>new String(a.name) - <any>new String(b.name); })

  }
  onAddToCartClick(item: any) {
    this.appService.cart.push(item)
    this.count = this.appService.cart.length;
    console.log(this.count)
  }


}
