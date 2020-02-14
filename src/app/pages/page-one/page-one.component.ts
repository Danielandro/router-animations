import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  pageTitle = "Page One";
  constructor() { }

  ngOnInit(): void {
  }

}
