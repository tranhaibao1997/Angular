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

  splitNum1(num:number) {
    var num1= num.toString();
    var part=[];
    part=num1.split('.');
    return part[0];



  }
  splitNum2(num:number)
  {
    var num1= num.toString();
    var part=[];
    part=num1.split('.');
    return part[1];
  }
  onAddToCartClick()
  {
    this.onAddToCartEvent.emit(this.item);
  }

}
