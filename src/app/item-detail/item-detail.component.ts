import { CartItem } from './../cartItem';
import { Location } from '@angular/common';
import { AppService } from './../../../../beautiful-angular-shopping/src/app/app.service';
import { AppServiceService } from './../app-service.service';
import { ItemListComponent } from './../item-list/item-list.component';
import { Item } from './../Item';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item:Item;
  quantity:number
  constructor(
    private rount: ActivatedRoute,
    private appService:AppServiceService,
    private location:Location
  ) { }

  ngOnInit() {
   this.getItemFromRouter();
   
  }

  // Get Item Id from URL and then get Item from Service
  getItemFromRouter()
  {
    const id= parseInt(this.rount.snapshot.paramMap.get('id'));
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.rount.snapshot.paramMap)}`);
    this.item=this.appService.getItemID(id);
   
}
  
// Add item to cart
  onAddToCartClick()
  {
    if(this.appService.cart.length==0)
    {
      let cartItem =new CartItem();
        cartItem.item=this.item;
        cartItem.quantity=this.quantity;
        this.appService.cart.push(cartItem)
    }
    else
    {
    let index=this.appService.cart.findIndex(i => i.item.id==this.item.id)
    if(index !=-1)
    {
      this.appService.cart[index].quantity++;
    }
    else
    {
      let cartItem =new CartItem();
      cartItem.item=this.item;
      cartItem.quantity=this.quantity;
      this.appService.cart.push(cartItem)
      console.log(this.quantity)
    }
  
    
    
  }  
  }
  


}


