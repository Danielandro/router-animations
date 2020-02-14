import { trigger, state, style, keyframes, animate, group, query, transition, animateChild } from "@angular/animations";

export const FADE_IN_ANIMATION =
  trigger("routeAnimation", [
    // define transition from PageOne to PageTwo
    transition("PageOne => *", [
      // set initial style on top level component (where router-outlet is)

      // need to position container relative and child elements absolute
      style({ position: "relative" }),
      // target child elements entering & leaving top level component
      query(":enter, :leave", [
        // apply this style immediately
        style({
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%"
        })
      ]),
      // ----------------------------------------------------------
      // target entering view
      // position it off page to the left
      query(":enter", [
        style({ left: "-100%" })
      ]),
      // execute child animations on the view that is leaving
      query(":leave", animateChild()),
      // run these animations in parallel
      group([
        // target leaving view and animate (slide right)
        query(":leave", [
          animate("300ms ease-out", style({
            left: "100%"
          }))
        ]),
        // target entering view and slide into page
        query(":enter", [
          animate("300ms ease-out", style({
            left: "0%"
          }))
        ])
      ]),
      // run child animations on entering element after main animation completes
      query(":enter", animateChild())
    ]),
    transition("PageThree => *", [
      style({ position: "relative" }),

      query(":enter, :leave", [

        style({
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%"
        })
      ]),
      query(":enter", [
        style({ right: "-100%" })
      ]),
      query(":leave", animateChild()),
      group([
        query(":leave", [
          animate("300ms ease-out", style({
            right: "100%"
          }))
        ]),
        query(":enter", [
          animate("300ms ease-out", style({
            right: "0%"
          }))
        ])
      ]),
      query(":enter", animateChild())
    ])
  ]);


