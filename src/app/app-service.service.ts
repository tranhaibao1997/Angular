import { Item } from './Item';
import { ITEMS } from './mock-data';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  cart:Item[]=[];
  count:number=this.cart.length;
  categoryID:number;
  constructor() { }
  getItem():Item[]
  {
    return ITEMS; 
  }
  getItemID(id:number):Item
  {
    return ITEMS.find(item => item.id ===id);
  }
  categoryArray(categoryID:number):Item[]
  {
    const array = this.getItem().filter(item =>
    item.categoryid == categoryID);

    return array;

  }


  
  

  
}
