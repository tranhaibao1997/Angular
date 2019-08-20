import { ITEMS } from './../mock-data';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {



  constructor(private appService: AppServiceService) { }
  items:Item[];
  
  selectedCategoryId: number;
  count:number;
 

  
  ngOnInit() {
    this.items=this.appService.getItem();
    this.items=this.appService.categoryArray;
    this.selectedCategoryId=this.appService.categoryID;


  }
  onAddToCartClick(item: any) {
    this.appService.cart.push(item);
    this.count = this.appService.cart.length;
    return this.count


}

  getPriceFilter() {
   var filterinput1=parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    var filterinput2=parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    const array = this.appService.categoryArray.filter(item => item.price * item.quantity > filterinput1 && item.price * item.quantity < filterinput2)
    return array;
}
PriceFilter()
{
  this.items=this.getPriceFilter();
}


}
