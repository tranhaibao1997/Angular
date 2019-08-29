
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count:number=0;
  constructor(private appService: AppServiceService,
    private rount: ActivatedRoute) { 
      this.appService.updatedCategoryRequest.subscribe(success => {
        this.count=success;
       
  
      }, error => { })
      

    
  }


  ngOnInit() {
       this.count=this.appService.cart.length;   

  }
  
  

}
