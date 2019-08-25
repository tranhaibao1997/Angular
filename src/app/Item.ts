export class Item
{
    id:number;
    categoryid:string;
    name:string;
    price: number;
    img:string;
    constructor(id?:number,categoryid?:string,name?:string,price?:number,img?:string)
    {
        this.id=id;
        this.categoryid=categoryid;
        this.name=name;
        this.price=price;
        this.img=img
    }
    
 
}

