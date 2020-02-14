import { trigger, state, style, keyframes, animate, group, query, transition, animateChild } from "@angular/animations";

export const FADE_IN_ANIMATION =
  trigger("routeAnimation", [
    // define transition from PageOne to PageTwo
    transition("PageOne <=> PageTwo", [
      // set initial style on top level component (where router-outlet is)
      style({ position: "relative" }),
      // target child elements entering & leaving top level component
      query(":enter, :leave", [
        // apply this style immediately
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        })
      ]),
      // target e
      query(":enter", [
        style({ left: "-100%" })
      ]),
      // execute the query
      query(":leave", animateChild()),
      // run these animations in parallel
      group([
        // target child on leave and animate
        query(":leave", [
          animate("300ms ease-out", style({
            left: "100%"
          }))
        ]),
        // target child on enter and animate
        query(":enter", [
          animate("300ms ease-out", style({
            left: "0%"
          }))
        ])
      ]),
      // target child on enter and execute animation
      query(":enter", animateChild())
    ]),

  ]);
