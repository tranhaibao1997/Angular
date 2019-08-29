
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { AppServiceService } from '../app-service.service';
import { Local } from 'protractor/built/driverProviders';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  items: Item[] = [];
  selectedCategoryId: number = parseInt(this.rount.snapshot.paramMap.get('id'))
  count: number;

  constructor(private rount: ActivatedRoute,
    private appService: AppServiceService,
  ) {
    this.appService.updatedCategoryRequest.subscribe(success => {
      if (success == 1) {
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
      if (success == 2) {
        this.appService.getCategory2Item().subscribe(success => {
          this.items = success.data.map(rawItem => {
            let temp = new Item();
            temp.id = rawItem.product_id;
            temp.categoryid = rawItem.category_id;
            temp.name = rawItem.name;
            temp.price = rawItem.price;
            temp.img = rawItem.img_url;
            return temp;            
          });
        });
      }

    }, error => { })
  }
  




  ngOnInit() {

    







  }
  // getItemFromRouter() {
  //   var id = parseInt(this.rount.snapshot.paramMap.get('id'));
  //   this.selectedCategoryId = id;
  //   console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.rount.snapshot.paramMap)}`);
  //   this.items = this.appService.getCategoryItem(id)
  //   //this.items = this.appService.items;



  // }
  onAddToCartClick(item: any) {
    //this.appService.cart.push(item);
    this.count = this.appService.cart.length;
    return this.count


  }

  getPriceFilter() {
    var filterinput1 = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    var filterinput2 = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    //const array = this.appService.categoryArray(this.selectedCategoryId).filter(item => item.price * item.quantity > filterinput1 && item.price * item.quantity < filterinput2)
    //return array;
  }
  PriceFilter() {
    //this.items=this.getPriceFilter();
  }



}
