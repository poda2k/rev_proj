import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { listOfItems } from '../Interfaces/listOfItems';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() itemLists : listOfItems = {} as listOfItems ; 
// @Input() price : number = 0 ;
// @Input() name : String = '' ;
// @Input() ID : number = 0 ;
// @Input() itemImg : String ='' ;
}
