import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '';
  // private headerService: HeaderService
  constructor() {}

  ngOnInit(): void {
    // this.headerService.title.subscribe((updatedTitle: string) => {
    //   this.title = updatedTitle;
    // });
  }

}
