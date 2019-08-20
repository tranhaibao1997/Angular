import { AppServiceService } from './../app-service.service';
import { AppService } from './../../../../beautiful-angular-shopping/src/app/app.service';
import { ITEMS } from './../mock-data';
import { Item } from './../Item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

   
  constructor(private appService:AppServiceService) { }

  ngOnInit() {
  }

  onSelectClick(clicked_id:number)
  {
    this.appService.categoryID = clicked_id;
   
  }
}
