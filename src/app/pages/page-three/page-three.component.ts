import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {
  pageTitle = "Page Three";

  constructor() { }

  ngOnInit(): void {
  }

}
