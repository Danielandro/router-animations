import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FADE_IN_ANIMATION } from "./animations/fading";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FADE_IN_ANIMATION]
})
export class AppComponent {
  title = 'router-animations';

  prepareRoute(outlet: RouterOutlet) {
    // returns the first falsy value or the last value if no falsy found
    // returns the data: { animation } value from the route definition and sets as animation state
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }

  onAnimationStart(event) {
    console.log(`START: FROM STATE - ${event.fromState} -> TO STATE - ${event.toState}`);
  }

  onAnimationEnd(event) {
    console.log("-----DONE-------");
  }
}
