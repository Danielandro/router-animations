import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePageComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() bgRed = false;
  @Input() bgBlue = false;
  @Input() bgGreen = false;
  constructor() { }

  ngOnInit(): void {
  }

}
