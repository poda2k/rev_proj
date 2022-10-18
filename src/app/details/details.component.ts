import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'services/categories.service';
import { featured } from '../Interfaces/featured_products';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  @Input() id : number = 0;
@Input() products : featured = {} as featured ;
  constructor( private route:ActivatedRoute , private catService : CategoriesService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0) ;
    this.products = this.catService.getprodById(this.id) ;
  }

}
