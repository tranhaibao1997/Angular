import { Item } from './../../../beautiful-angular-shopping/src/app/ItemModel';
import { Observable } from 'rxjs';
import { ITEMS } from './../../../beautiful-angular-shopping/src/app/Item-data';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  cart=[];
  count=this.cart.length;
  categoryID;
  getItem()
  {
    return ITEMS; 
  }
  getItemID(id)
  {
    return ITEMS.filter(item => item.id ===id)
  }
  get categoryArray()
  {
    const array = this.getItem().filter(item =>
      item.categoryid == this.categoryID)
    return array;

  }
  
  

  constructor() { }
}
