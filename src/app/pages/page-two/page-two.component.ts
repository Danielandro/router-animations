import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  pageTitle = "Page Two";
  constructor() { }

  ngOnInit(): void {
  }

}
