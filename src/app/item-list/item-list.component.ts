import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-data';
import { AppServiceService } from '../app-service.service';
import { Item } from '../Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  count:number=0;
  items:Item[]=[];
  searchText:string;
  constructor(private appService: AppServiceService)
  {
    
  }
  
  getItemsFormService():void
  {
    this.items=this.appService.getItem();
  }
  ngOnInit() {
    this.getItemsFormService();
  }
  
SortedArray()
{
    
  return this.items.sort((a,b) =>
  { return <any>new String(a.quantity) - <any>new String(b.quantity);})

}
onAddToCartClick(item: any)
  {
    this.appService.cart.push(item)
    this.count=this.appService.cart.length;
    console.log(this.count)
  }


}
