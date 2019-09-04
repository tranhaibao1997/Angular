import { Location } from '@angular/common';
import { AppServiceService } from './../app-service.service';
import { Item } from './../Item';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 
  
  constructor(private appService: AppServiceService)
  {
    
  }
  ngOnInit()
  {
   
  
  }


 

  
}
