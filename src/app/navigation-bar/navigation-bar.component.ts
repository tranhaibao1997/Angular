import { Location } from '@angular/common';
import { AppServiceService } from './../app-service.service';
import { Item } from './../Item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

   
  constructor(private appService:AppServiceService,
    private location: Location) { }
  categorylist:string[]=[];

  ngOnInit() {
    
  }

  
  onSelectClick(clicked_id:number)
  {
    this.appService.categoryID = clicked_id;
    this.appService.updatedCategoryRequest.next(clicked_id)
    console.log(this.appService.categoryID)
    
    
   
  }
}
