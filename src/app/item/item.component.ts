import { Item } from './../Item';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  
  @Input() item:Item=new Item();
  @Output() onAddToCartEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }


  //Output a item 
  onAddToCartClick()
  {
    this.onAddToCartEvent.emit(this.item);
  }

}
