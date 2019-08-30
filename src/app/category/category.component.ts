
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { AppServiceService } from '../app-service.service';
import { Local } from 'protractor/built/driverProviders';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../cartItem';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  items: Item[] = [];
  selectedCategoryId: number = parseInt(this.rount.snapshot.paramMap.get('id'))
  count: number;
  items1:any
  items2:any


  constructor(private rount: ActivatedRoute,
    private appService: AppServiceService,
  ) {
    this.ShowCategoryItem()
  
  }
  
GetCategoryI1tem()
{
  this.appService.getCategory1Item().subscribe(success => {
     this.items=success.data.map(rawItem => {
      this.items1 = new Item();
      this.items1.id = rawItem.product_id;
      this.items1.categoryid = rawItem.category_id;
      this.items1.name = rawItem.name;
      this.items1.price = rawItem.price;
      this.items1.img = rawItem.img_url;
      return this.items1;
    })
    
     });
     
     
     
}
  GetCategory2Item()
  {
    this.appService.getCategory2Item().subscribe(success => {
      this.items = success.data.map(rawItem => {
        this.items2 = new Item();
        this.items2.id = rawItem.product_id;
        this.items2.categoryid = rawItem.category_id;
        this.items2.name = rawItem.name;
        this.items2.price = rawItem.price;
        this.items2.img = rawItem.img_url;
        return this.items2;
      })
       });
}
ShowCategoryItem()
{
  this.appService.updatedCategoryRequest.subscribe(success => {
    if (success == 1) {
      this.GetCategoryI1tem();
      
    }
    if (success == 2) {
     this.GetCategory2Item();
    }
}, error => {console.log(error) })
}
ngOnInit() {}
 
  onAddToCartClick(item: any) {
    let cartItem =new CartItem();
    cartItem.item=item;
    cartItem.quantity=1;
    this.appService.cart.push(cartItem)
    console.log(this.appService.cart)}
  
    getPriceFilter() {
    var filterinput1 = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    var filterinput2 = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    if(this.selectedCategoryId=1)
    {
    const array = this.items1.filter(item => item.price * item.quantity > filterinput1 && item.price * item.quantity < filterinput2)
    return this.items=array
    }
    else
    {
      const array = this.items1.filter(item => item.price * item.quantity > filterinput1 && item.price * item.quantity < filterinput2)
      return this.items=array;
    }
  }
 



}
