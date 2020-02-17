import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeUp, fadeDown } from "../../animations/element-animations";
import { useAnimation, trigger, transition } from '@angular/animations';

@Component({
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  animations: [
    trigger("fadeUp", [
      transition(":enter", useAnimation(fadeUp)),
      transition(":leave", useAnimation(fadeDown))

    ])
  ]
})
export class PageOneComponent implements OnInit {
  pageTitle = "Page One";
  isActive = "inActive";
  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('@fadeUp') private animate = true;

  triggerAnimation() {
    this.isActive = this.isActive === "active" ? "inActive" : "active";
    console.log("Is Active: ", this.isActive);
  }
}
