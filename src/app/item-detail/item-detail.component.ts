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
  @Input() item:Item;
  constructor(
    private rount: ActivatedRoute,
    private appService:AppServiceService,
    private location:Location
  ) { }

  ngOnInit() {
    console.log(this.item)
  }
  getItemFromRouter()
  {
    const id= parseInt(this.rount.snapshot.paramMap.get('id'));
    this.appService.getItemID(id).find(item => this.item==item)


  }
  goBack()
  {
    this.location.back();
  }

}
