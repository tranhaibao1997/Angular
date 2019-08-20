import { ITEMS } from './../mock-data';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppServiceService) { }

  count;
  ngOnInit() {
       this.count=this.appService.cart.length;   

  }
  

}
