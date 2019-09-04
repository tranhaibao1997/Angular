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
  categorylist: string[] = [];
private abc: any;
  constructor(private appService: AppServiceService,
  ) { }
  

  ngOnInit() {

  }



  // Get Category Id and then send to Service
  onSelectClick(clickedId: number) {
    this.appService.categoryID = clickedId;
    this.appService.updatedCategoryRequest.next(clickedId);
    console.log(this.appService.categoryID)
  }
}
