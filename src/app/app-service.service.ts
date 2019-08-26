import { Item } from './Item';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  cart: Item[] = [];
  count: number = this.cart.length;
  categoryID: number;
  items:Item[]=[];

  constructor(private http: HttpClient,
  ) { }

  getItem(): Observable<any> {
    return this.http.get<any>('https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1');
  }
  getItemsFormService(): void {
    this.getItem().subscribe(success => {
      var a=success.data.map(rawItem => 
        {
          let temp=new Item()
          temp.id=rawItem.product_id;
          temp.categoryid=rawItem.category_id;
          temp.name=rawItem.name;
          temp.price=rawItem.price;
          temp.img=rawItem.img_url
          this.items.push(temp);
        }
        )
      

    },
      //
      error => {
        console.log(error);
      });

  }
  

  getItemID(id: number): Item {
    return this.items.find(item => item.id === id);
  }

  categoryArray(categoryID: string): Item[] {
    return this.items.filter(item => item.categoryid === categoryID);

  }






}
