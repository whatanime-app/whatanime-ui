import { globalCss } from "./stitches";
import { roboto } from "./tokens";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: "$gray900",
    color: "$gray50",
    fontFamily: roboto.style.fontFamily,
    "-webkit-font-smoothing": "antialiased",
  },
});
