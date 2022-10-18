import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class HeaderService {
  title = new BehaviorSubject('Initial Title');

  setTitle(title: string) {
    this.title.next(title);
  }
}