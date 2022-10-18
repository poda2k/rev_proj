import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'services/categories.service';
import { featured } from '../Interfaces/featured_products';
import { listOfItems } from '../Interfaces/listOfItems';

@Component({
  selector: 'app-f-products',
  templateUrl: './f-products.component.html',
  styleUrls: ['./f-products.component.css']
})
export class FProductsComponent implements OnInit {
  
  @Input() type : string ='' ;
  prod : Array<featured> =[] ;
  constructor( private CatService : CategoriesService ) {}

  ngOnInit(): void {
    this.prod = this.CatService.getFeaturedProducts(this.type) ;
  }

}
