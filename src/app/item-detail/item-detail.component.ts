import { Location } from '@angular/common';
import { AppService } from './../../../../beautiful-angular-shopping/src/app/app.service';
import { AppServiceService } from './../app-service.service';
import { ItemListComponent } from './../item-list/item-list.component';
import { ITEMS } from './../mock-data';
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
  constructor(
    private rount: ActivatedRoute,
    private appService:AppServiceService,
    private location:Location
  ) { }

  ngOnInit() {
   this.getItemFromRouter();
   
  }
  getItemFromRouter()
  {
    const id= parseInt(this.rount.snapshot.paramMap.get('id'));
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.rount.snapshot.paramMap)}`);
    this.item=this.appService.getItemID(id);
    console.log(this.item)


  }
  goBack()
  {
    this.location.back();
  }
  onAddToCartClick()
  {
    this.appService.cart.push(this.item)
    
  }
  


}


