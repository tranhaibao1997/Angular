import { CartItem } from './cartItem';
import { Item } from './Item';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  cart: any[];
  categoryID: number;
  items: Item[] = [];
  updatedCategoryRequest: BehaviorSubject<any> = new BehaviorSubject(false);



  constructor(private http: HttpClient,
  ) { }

  getCategory1Item(): Observable<any> {
    return this.http.get<any>('https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1');
  }
  getCategory2Item(): Observable<any> {
    return this.http.get<any>('https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=1');
  }
  //get Category 1 Items
  // getItemsFormService(): any {
  //   this.getCategory1Item().subscribe(success => {
  //     result = success.data.map(rawItem => {
  //       let temp = new Item()
  //       temp.id = rawItem.product_id;
  //       temp.categoryid = rawItem.category_id;
  //       temp.name = rawItem.name;
  //       temp.price = rawItem.price;
  //       temp.img = rawItem.img_url
  //       return temp;
  //     }

  //     )
  //     console.log("cat 1", a)

     


  //   },
  //     //
  //     error => {
  //       console.log(error);
  //     });

  // }
  //Get Category 2 Items
  getCategory2ItemsFormService(): any {
    this.getCategory2Item().subscribe(success => {
      var a = success.data.map(rawItem => {

        let temp = new Item()
        temp.id = rawItem.product_id;
        temp.categoryid = rawItem.category_id;
        temp.name = rawItem.name;
        temp.price = rawItem.price;
        temp.img = rawItem.img_url
        return temp;
        

      }
      )
      console.log("cat 2", a)
      return a;

    }
      ,
      //
      error => {
        console.log(error);
      });

  }


  getItemID(id: number): Item {
    return this.items.find(item => item.id === id);
  }

  // return Category Items base on category id
  // getCategoryItem(categoryID): any {
  //   if (categoryID == 1) {
  //     this.getCategory1Item().subscribe(success => {
  //       success.data.map(rawItem => {
  //         let temp = new Item()
  //         temp.id = rawItem.product_id;
  //         temp.categoryid = rawItem.category_id;
  //         temp.name = rawItem.name;
  //         temp.price = rawItem.price;
  //         temp.img = rawItem.img_url
  //         return temp;
  //       }
  
  //       )
  //       console.log("cat 1", a)
  
       
  
  
  //     },
  //       //
  //       error => {
  //         console.log(error);
  //       });
  
  //   }
  //   else if (categoryID == 2) {
  //     return this.getCategory2ItemsFormService();

  //   }
  //   else {
  //     return null;
  //   }
  // }








}
