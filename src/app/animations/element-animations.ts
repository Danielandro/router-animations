import { trigger, state, style, animate, animateChild, keyframes, stagger, animation, query } from "@angular/animations";

// export const fadeUp = animation([
//   // start elements entering page as invisiible
//   query(":enter", style({ opacity: "0" }), { optional: true }),
//   // make elements visble with 0.3s delay between each element
//   query(":enter", animateChild(), { optional: true }),
//   query(":enter", [stagger("1s", animate("1s ease-in",
//     style({ opacity: "1" })))], { optional: true }),

//   query(":leave", [stagger("1s", animate("1s ease-in",
//     style({ opacity: "0" })
//   ))], { optional: true }),
//   query(":leave", animateChild(), { optional: true }),
// ]);

export const fadeUp = animation([
  // start entering element, invisible and down 15px
  // after 1s, animate to become visible and move up 15px
  query(".child", [
    style({ opacity: "0", transform: "translateY(30px)" }),
    stagger("0.4s", animate("0.5s ease-in",
      style({ opacity: "1", transform: "translateY(0px)" })))
  ], { optional: true }),
  // make elements visble with 0.3s delay between each element
  // query(":enter", animateChild(), { optional: true }),
  query(".child", [
    animate(1000, style("*"))
  ])
]);
export const fadeDown = animation([
  // start entering element, invisible and down 15px
  // after 1s, animate to become visible and move up 15px
  query(".child", [
    style({ opacity: "1", transform: "translateY(0px)" }),
    stagger("-0.4s", animate("0.5s ease-in",
      style({ opacity: "0", transform: "translateY(30px)" })))
  ], { optional: true }),
  // make elements visble with 0.3s delay between each element
  // query(":enter", animateChild(), { optional: true }),
  // query(".child", [
  //   animate(1000, style("*"))
  // ])
]);
