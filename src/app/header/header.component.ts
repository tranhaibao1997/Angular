
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count:number=0;
  constructor(private appService: AppServiceService) { }


  ngOnInit() {
       //this.count=this.appService.cart.length;   

  }
  

}
