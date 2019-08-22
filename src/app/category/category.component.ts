import { ITEMS } from './../mock-data';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { AppServiceService } from '../app-service.service';
import { Local } from 'protractor/built/driverProviders';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  items:Item[]=[];  
  selectedCategoryId:number =this.appService.categoryID;
  count:number;
  constructor(private rount: ActivatedRoute,
    private appService:AppServiceService,
    ) { }
 
 

  
  ngOnInit() {
 this.getItemFromRouter();
    



  }
  getItemFromRouter()
  {
    var id= parseInt(this.rount.snapshot.paramMap.get('id'));
    this.selectedCategoryId=id;
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.rount.snapshot.paramMap)}`);
    this.items=this.appService.categoryArray(id)


  }
  onAddToCartClick(item: any) {
    this.appService.cart.push(item);
    this.count = this.appService.cart.length;
    return this.count


}

  getPriceFilter() {
   var filterinput1=parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    var filterinput2=parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    const array = this.appService.categoryArray(this.selectedCategoryId).filter(item => item.price * item.quantity > filterinput1 && item.price * item.quantity < filterinput2)
    return array;
}
PriceFilter()
{
  this.items=this.getPriceFilter();
}



}
