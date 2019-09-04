
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
  constructor(private rount: ActivatedRoute,
    private appService: AppServiceService,
  ) {
    this.ShowCategoryItem()

  }
  ngOnInit(
    ) {
      this.getPriceFilter();
    }


      // Get Item From Category 1 from API in AppService
  GetCategoryI1tem() {
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

  // Get Item From Category 1 from API in AppService
  GetCategory2Item() {
    this.appService.getCategory2Item().subscribe(success => {
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

// Get Item From Category from API in AppService depends on CategoryID
  ShowCategoryItem() {
    this.appService.updatedCategoryRequest.subscribe(success => {
      if (success == 1) {
        this.GetCategoryI1tem();

      }
      if (success == 2) {
        this.GetCategory2Item();
      }
    }, error => { console.log(error) })
  }


// Click to add Item to cart
  onAddToCartClick(item: any) {
    if (this.appService.cart.length == 0) {
      let cartItem = new CartItem();
      cartItem.item = item;
      cartItem.quantity = 1;
      this.appService.cart.push(cartItem)
    }
    else {
      let index = this.appService.cart.findIndex(i => i.item.id == item.id)
      console.log(index)
      if (index != -1) {
        this.appService.cart[index].quantity++;
      }
      else {
        let cartItem = new CartItem();
        cartItem.item = item;
        cartItem.quantity = 1;
        this.appService.cart.push(cartItem)
      }



    }
  }


  // Get Items which were filtered by input prices
  getPriceFilter() {
    var filterinput1 = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    var filterinput2 = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    if (this.selectedCategoryId = 1) {
      const array1 = this.items.filter(item => item.price > filterinput1 && item.price < filterinput2)
      return this.items = array1
    }
    else {
      const array2 = this.items.filter(item => item.price > filterinput1 && item.price < filterinput2)
      return this.items = array2;
    }
  }




}
