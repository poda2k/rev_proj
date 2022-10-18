import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // private headerService: HeaderService
  constructor() { }

  ngOnInit() {
    // this.headerService.setTitle('home');
  }

}
