import { CartItem } from './cartItem';
import { Item } from './Item';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  cart: CartItem[]=[];
  count:number=0;
  categoryID: number=0;;
  items: Item[] = [];
  updatedCategoryRequest: BehaviorSubject<any> = new BehaviorSubject(false);
  updatedCartCountRequest: BehaviorSubject<any> = new BehaviorSubject(false);



  constructor(private http: HttpClient,
  ) { }

  getCategory1Item(): Observable<any> {
    return this.http.get<any>('https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1');
  }
  getCategory2Item(): Observable<any> {
    return this.http.get<any>('https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=1');
  }

  
  
  


  getItemID(id: number): Item {
    return this.items.find(item => item.id === id);
  }










}
