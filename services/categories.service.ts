import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { featured } from 'src/app/Interfaces/featured_products';
import { listOfItems } from '../src/app/Interfaces/listOfItems';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  prod = [{
    prodName : "1st item" ,
    prodDiscount: 0.50 ,
    prodId : 1 ,
    prodImage : "assets/imgs/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg" ,
    prodNumber : 12 ,
    prodPrice : 100 ,
    type : "featured" ,
 } ,
 {
   prodName : "2nd item" ,
   prodDiscount: 0 ,
   prodId : 2 ,
   prodImage : "assets/imgs/pizza-2619967.jpg" ,
   prodNumber : 12 ,
   prodPrice : 100 ,
   type : "recent" ,
},
{
  prodName : "3rd item" ,
  prodDiscount: 0,
  prodId : 3 ,
  prodImage : "assets/imgs/pizza-2619967.jpg" ,
  prodNumber : 12 ,
  prodPrice : 100 ,
  type : "recent" ,
},
{
 prodName : "4th item" ,
 prodDiscount: 0 ,
 prodId : 4 ,
 prodImage : "assets/imgs/pizza-2619967.jpg" ,
 prodNumber : 12 ,
 prodPrice : 100 ,
 type : "recent" ,
},
{
prodName : "5th item" ,
prodDiscount: 0 ,
prodId : 5 ,
prodImage : "assets/imgs/pizza-2619967.jpg" ,
prodNumber : 12 ,
prodPrice : 100 ,
type : "recent" ,
},
{
prodName : "6th item" ,
prodDiscount: 0 ,
prodId : 6 ,
prodImage : "assets/imgs/pizza-2619967.jpg" ,
prodNumber : 12 ,
prodPrice : 100 ,
type : "featured" ,
},
{
prodName : "7th item" ,
prodDiscount: 0 ,
prodId : 7 ,
prodImage : "assets/imgs/ground-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg" ,
prodNumber : 12 ,
prodPrice : 100 ,
type : "featured" ,
}
]
  constructor() { }

  getCategories() : Array<listOfItems> {
    
    return [{
      itemName : 'pizza' ,
      itemPrice : 13 ,
      itemImg : 'assets/imgs/pizza-2619967.jpg' ,
      itemID : 34
  } ,
  {
    itemName : 'margrita' ,
    itemPrice : 33 ,
    itemImg : 'assets/imgs/sdw.jpg' ,
    itemID : 34
}] ;
    
    
  }

  getFeaturedProducts(type : string) : Array<featured>{
    return this.prod.filter((x)=>  x.type==type)  ;
  }

  getprodById( id:number) : featured{
  return this.prod.find((x)=> x.prodId==id) ?? ({} as featured) ;    /// ?? is for null safty in case of returning null ......

  }
}
