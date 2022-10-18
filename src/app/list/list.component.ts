import { Component, Input, OnInit } from '@angular/core';
import { featured } from '../Interfaces/featured_products';
import { listOfItems } from '../Interfaces/listOfItems';
import { CategoriesService } from 'services/categories.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  type : string = "" ;
 @Input() featuredList : featured = {} as featured ;
  constructor( private Catservice:CategoriesService) { }

  ngOnInit(): void {
  //  this.featuredList = this.Catservice.getFeaturedProducts(this.type) ;
  }



}
