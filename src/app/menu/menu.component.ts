import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../header.service';
import { CategoriesService } from 'services/categories.service';
import { ActivatedRoute } from '@angular/router';



import { listOfItems } from '../Interfaces/listOfItems';
import { featured } from '../Interfaces/featured_products';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // private headerService: HeaderService
 
  hider : Boolean = true ;
  interval : any ;
  //////// INJECTION ////////
  constructor(private route:ActivatedRoute, private CatService : CategoriesService) { }
 
  list_1 : Array<listOfItems>=[] ;
  @Input() List_2 : featured = {} as featured ;
  
  
 Name : String = "" ;
 Id : number = 0 ;
 price : number =0 ;
 itemImg : String= '' ;
//  validator : boolean = false ;
//  validation(){
//   this.validator=true ;
//  }
 addProduct(){
  this.list_1.push({
    itemName : this.Name,
    itemPrice : this.price,
    itemImg : this.itemImg,
    itemID : this.Id
  } ,
  )
  this.Id++ ;
 }
 ngOnInit() {
  // this.headerService.setTitle('Menu');
  this.list_1 = this.CatService.getCategories() ;
  this.List_2 = this.CatService.getprodById(this.List_2.prodId);
  this.List_2.prodId = Number(this.route.snapshot.paramMap.get('id') ?? 0) ;
  
}
Hide(){
this.hider = false ;
}
unHide(){
  this.hider = true ;
}


}
