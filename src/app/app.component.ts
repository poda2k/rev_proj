import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  // private headerService: HeaderService
  constructor() {}

  ngOnInit() {
    // this.headerService.title.subscribe((title: string) => {
    //   this.title = title;
    // });
  }
}
