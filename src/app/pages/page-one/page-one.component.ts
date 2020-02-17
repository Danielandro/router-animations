import { Component, OnInit } from '@angular/core';
import { fadeUp } from "../../animations/element-animations";
import { useAnimation, trigger, transition } from '@angular/animations';

@Component({
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  animations: [
    trigger("fadeUp", [transition("* => *", useAnimation(fadeUp))])
  ]
})
export class PageOneComponent implements OnInit {
  pageTitle = "Page One";
  isActive = "inActive";
  constructor() { }

  ngOnInit(): void {
  }

  triggerAnimation() {
    this.isActive = this.isActive === "active" ? "inActive" : "active";
    console.log("Is Active: ", this.isActive);
  }
}
