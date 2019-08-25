import { Item } from './Item';
import { ITEMS } from './mock-data';
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
  serviceitem;
  constructor(private http: HttpClient,
  ) { }

  getItem(): Observable<any> {
    return this.http.get<any>('https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1');
  }
  

  getItemID(id: number): Item {
    return ITEMS.find(item => item.id === id);
  }

  categoryArray(categoryID: string): Item[] {
    return ITEMS.filter(item => item.categoryid === categoryID);

  }






}
